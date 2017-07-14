package org.sangguo.newrnproject.reactnative.map;

import java.util.HashMap;
import java.util.Map;
import org.sangguo.newrnproject.reactnative.ReactMainActivity;
import org.sangguo.newrnproject.reactnative.base.BaseInstanceManagerReactActivity;

/**
 * Created by chenwei on 2017/7/11.
 */

public class ReactNativeModulesMap {

  private static Map<Class<? extends BaseInstanceManagerReactActivity>, String> moduleMap =
      new HashMap<>();

  static {
    moduleMap.put(ReactMainActivity.class, ReactNativeModules.MODULE_HOME);
  }

  public static String getModuleName(Class<? extends BaseInstanceManagerReactActivity> clazz) {
    return moduleMap.get(clazz);
  }
}
