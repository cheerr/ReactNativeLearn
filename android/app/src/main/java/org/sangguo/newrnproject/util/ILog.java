package org.sangguo.newrnproject.util;

import android.util.Log;
import org.sangguo.newrnproject.App;

/**
 * Created by chenwei on 2017/7/11.
 */

public class ILog {

  public static void i(String tag, String msg) {
    if (App.DEBUG) {
      Log.i(tag, msg);
    }
  }

  public static void d(String tag, String msg) {
    if (App.DEBUG) {
      Log.d(tag, msg);
    }
  }

  public static void e(String tag, String msg) {
    if (App.DEBUG) {
      Log.e(tag, msg);
    }
  }
}
