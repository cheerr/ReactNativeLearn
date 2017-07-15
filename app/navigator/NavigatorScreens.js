/**
 * Created by chenwei on 2017/7/13.
 * 提供所有的界面
 */

import React from 'react'

import HelloScreen from '../modules/HelloScreen'
import TestScreen from '../modules/TestScreen'

const NavigatorScreens = {
  HelloScreen: {screen: HelloScreen},
  TestScreen: {
    screen: TestScreen,
    navigationOptions: {}  //可以定制navigationOptions，但是会被页面内的status navigationOptions覆盖
  }
}

export default NavigatorScreens