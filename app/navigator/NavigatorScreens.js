/**
 * Created by chenwei on 2017/7/13.
 * 提供所有的界面
 */

import React from 'react'

import Hello from "../modules/Hello";
import Test from "../modules/Test";

const NavigatorScreens = {
    Hello: {screen: Hello},
    Test: {
        screen: Test,
        navigationOptions: {}  //可以定制navigationOptions，但是会被页面内的status navigationOptions覆盖
    }
};

export default NavigatorScreens;