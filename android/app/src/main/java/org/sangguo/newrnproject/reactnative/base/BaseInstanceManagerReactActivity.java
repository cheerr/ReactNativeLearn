package org.sangguo.newrnproject.reactnative.base;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.view.KeyEvent;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import org.sangguo.newrnproject.reactnative.map.ReactNativeModulesMap;
import org.sangguo.newrnproject.util.ILog;

/**
 * Created by chenwei on 2017/7/11.
 */

public abstract class BaseInstanceManagerReactActivity extends AppCompatActivity
    implements DefaultHardwareBackBtnHandler, ReactInstanceManager.ReactInstanceEventListener {

  private static final String TAG = BaseInstanceManagerReactActivity.class.getSimpleName();
  private ReactRootView mReactRootView;

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    mReactRootView = new ReactRootView(this);
    // 注意这里的HelloWorld必须对应“index.android.js”中的
    // “AppRegistry.registerComponent()”的第一个参数

    if (TextUtils.isEmpty(reactModuleName())) {
      throw new IllegalArgumentException(
          getClass().getSimpleName() + " 未注册到 ReactNativeModulesMap ！");
    }

    mReactRootView.startReactApplication(getReactInstanceManager(), reactModuleName(),
        reactLauncherBundle());

    getReactInstanceManager().addReactInstanceEventListener(this);
    setContentView(mReactRootView);
  }

  /**
   * 传递ReactRootView的Bundle参数，默认为getIntent().getExtras()
   */
  protected Bundle reactLauncherBundle() {
    return getIntent().getExtras();
  }

  /**
   * 传递给ReactRootView的moduleName,统一映射在ReactNativeModuleMap
   */
  private String reactModuleName() {
    return ReactNativeModulesMap.getModuleName(getClass());
  }

  @Override public void onReactContextInitialized(ReactContext context) {
    ILog.i(TAG, getClass().getSimpleName() + " onReactContextInitialized..");
  }

  /**
   * ReactInstanceManager统一在App里生成
   */
  public ReactInstanceManager getReactInstanceManager() {
    return getReactNativeHost().getReactInstanceManager();
  }

  public ReactNativeHost getReactNativeHost() {
    return ((ReactApplication) getApplication()).getReactNativeHost();
  }

  public ReactRootView getReactRootView() {
    return mReactRootView;
  }

  @Override public void invokeDefaultOnBackPressed() {
    super.onBackPressed();
  }

  @Override protected void onPause() {
    super.onPause();
    getReactInstanceManager().onHostPause(this);
  }

  @Override protected void onResume() {
    super.onResume();
    getReactInstanceManager().onHostResume(this, this);
  }

  @Override protected void onDestroy() {
    super.onDestroy();
    getReactInstanceManager().removeReactInstanceEventListener(this);
    getReactInstanceManager().onHostDestroy();
  }

  public void onBackPressed() {
    if (getReactNativeHost().hasInstance()) {
      getReactInstanceManager().onBackPressed();
      return;
    }
    super.onBackPressed();
  }

  @Override public void onNewIntent(Intent intent) {
    if (getReactNativeHost().hasInstance()) {
      getReactNativeHost().getReactInstanceManager().onNewIntent(intent);
      return;
    }
    super.onNewIntent(intent);
  }

  @Override public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_MENU) {
      getReactInstanceManager().showDevOptionsDialog();
      return true;
    }
    return super.onKeyUp(keyCode, event);
  }
}
