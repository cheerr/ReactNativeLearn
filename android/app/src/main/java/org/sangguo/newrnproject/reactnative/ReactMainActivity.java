package org.sangguo.newrnproject.reactnative;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import org.sangguo.newrnproject.reactnative.base.BaseInstanceManagerReactActivity;

/**
 * Created by chenwei on 2017/7/11.
 */

public class ReactMainActivity extends BaseInstanceManagerReactActivity {

  private static final String SCREEN = "screen";
  private static final String TITLE = "title";

  public static Intent getReactIntent(Context context, String screenName, String title) {
    Intent intent = new Intent(context, ReactMainActivity.class);
    intent.putExtra(SCREEN, screenName);
    intent.putExtra(TITLE, title);
    return intent;
  }

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override public void setContentView(View view) {
    super.setContentView(view);
    //FrameLayout container = (FrameLayout) findViewById(R.id.reactRootViewContainer);
    //container.addView(view);
  }
}
