/**
 * Created by chenwei on 2017/7/11.
 *
 * 导航栏路由页面
 */
import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation'
import NavigatorScreens from './NavigatorScreens'
import RnApp from '../constant/RnApp'

class INavigator extends Component {

  render () {

    const routeName = NavigatorScreens.hasOwnProperty(this.props.routeName) ? this.props.routeName : RnApp.MainPage

    //NavigatorScreens注册所有页面
    let NavigatorApp = StackNavigator(NavigatorScreens, {
      initialRouteName: routeName //initialRouteName存放初次跳转的页面名字
    })

    //Navigator的参数需要传递在screenProps中
    return <NavigatorApp screenProps={this.props}/>
  }
}

export default INavigator
