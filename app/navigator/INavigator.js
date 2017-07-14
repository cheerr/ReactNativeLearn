/**
 * Created by chenwei on 2017/7/11.
 *
 * 导航栏路由页面
 */
import React, {Component} from 'react'

import {StackNavigator} from "react-navigation";
import NavigatorScreens from "./NavigatorScreens";


class INavigator extends Component {

    render() {

        //NavigatorScreens注册所有页面
        let NavigatorApp = StackNavigator(NavigatorScreens, {
            initialRouteName: this.props.routeName //initialRouteName存放初次跳转的页面名字
        });

        //Navigator的参数需要传递在screenProps中
        return <NavigatorApp screenProps={this.props}/>
    }
}


export default INavigator;
