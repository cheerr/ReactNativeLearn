package org.sangguo.newrnproject;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;
import java.util.Random;
import org.sangguo.newrnproject.reactnative.ReactMainActivity;

public class MainActivity extends AppCompatActivity {

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    overlayPermissionRequest();
  }

  public void toMain(View view) {
    startActivity(
        ReactMainActivity.getReactIntent(this, "TestScreen", "自定义" + new Random().nextInt(100)));
  }

  private static final int OVERLAY_PERMISSION_REQ_CODE = 0x600;

  /**
   * 请求悬浮窗权限
   */
  protected void overlayPermissionRequest() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      if (!Settings.canDrawOverlays(this)) {
        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:" + getPackageName()));
        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
      }
    }
  }

  @Override protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        if (!Settings.canDrawOverlays(this)) {
          Toast.makeText(this, "请开启悬浮窗权限", Toast.LENGTH_SHORT).show();
          // SYSTEM_ALERT_WINDOW permission not granted...
        }
      }
    }
  }
}
