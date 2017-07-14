package org.sangguo.newrnproject.reactnative.base;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.List;
import org.sangguo.newrnproject.BuildConfig;

/**
 * Created by chenwei on 2017/7/11.
 */

public abstract class BaseRnApplication extends Application implements ReactApplication {

  private ReactNativeHost reactNativeHost;

  @Override public ReactNativeHost getReactNativeHost() {
    if (reactNativeHost == null) {
      reactNativeHost = createReactNativeHost();
    }
    return reactNativeHost;
  }

  private ReactNativeHost createReactNativeHost() {
    return new ReactNativeHost(this) {

      @Override public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override protected List<ReactPackage> getPackages() {
        return registerPackages();
      }
    };
  }

  /**
   * todo 注册ReactPackage
   */
  protected List<ReactPackage> registerPackages() {

    //@formatter:off

    return Arrays.<ReactPackage>asList(
        new MainReactPackage()
        //add others
    );

    //@formatter:on
  }
}
