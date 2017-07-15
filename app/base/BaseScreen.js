/**
 * Created by chenwei on 2017/7/12.
 */

import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Platform,
} from 'react-native'
import LogUtil from '../utils/LogUtil'
import ActionBar from '../bar/ActionBar'

const TAG = 'LifeCycle_'

class BaseScreen extends Component {

  // if (Platform.OS === 'android')

  constructor (props) {
    super(props)
  }

  // static navigationOptions = ({navigation, screenProps}) => ({
  //   header: <ActionBar
  //     nav={navigation}
  //     screenProps={screenProps}
  //     data={{
  //       title: ''
  //     }}
  //   />,
  // })

  componentWillMount () {
    LogUtil.i(TAG + 'componentWillMount', this.props)

  }

  //非常重要的方法，设置setState需要在componentDidMount才能调用
  componentDidMount () {
    LogUtil.i(TAG + 'componentDidMount', this.props)

  }

  componentWillUnmount () {
    LogUtil.i(TAG + 'componentWillUnmount')
  }

//
// componentWillReceiveProps(nextProps) {
//     super.componentWillReceiveProps(nextProps);
//     LogUtil.i(TAG + "componentWillUnmount");
// }
//
// shouldComponentUpdate(nextProps, nextState) {
//     LogUtil.i(TAG + "shouldComponentUpdate", nextState);
//     return true;
// }
//
//
// componentDidUpdate(prevProps, prevState) {
//     LogUtil.i(TAG + "componentDidUpdate", prevProps);
//     super.componentDidUpdate(prevProps, prevState);
// }

}

export default BaseScreen