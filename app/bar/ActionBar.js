/**
 * Created by chenwei on 2017/7/12.
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ListView,
  Alert,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler
} from 'react-native'
import LogUtil from '../utils/LogUtil'
import { dp } from '../utils/PixelUtil'
import style_A from '../style/customStyle'
import JsonMerge from '../utils/JsonMerge'
import BarStyles from './BarStyles'

class ActionBar extends Component {

  //设置必须的属性值
  static propTypes = {
    nav: React.PropTypes.object.isRequired,
    // screenProps: React.PropTypes.object.isRequired,
  }//用这种方式防止类型错误

  constructor (props) {
    super(props)
    LogUtil.i('ActionBar_constructor()', this.props)
    this._initState()

  }

  initDefaultProps () {//设置默认属性
    return {
      title: '',
      hideBack: false,
      style: 'white',  //white|black
    }
  };

  /**
   * 初始化state
   * @private  _开头的就是私有方法
   */
  _initState () {
    this.state = this.initDefaultProps()
    let screenProps = this.props.screenProps
    if (screenProps && screenProps.outProps && screenProps.outProps.screen === this.props.nav.state.routeName) {
      this.state.sysBack = true
    } else {
      this.state.sysBack = false
    }
    this.state = JsonMerge.merge(this.state, this.props.data)
    LogUtil.i('_initState', this.state)
  }

  /**
   * 设置title
   * @param title
   */
  setTitle (title) {
    this.setState({
      title: title
    })
  }

  _back () {
    this.state.sysBack ? BackHandler.exitApp() : this.props.nav.goBack()
  }

  render () {

    const barStyle = BarStyles.get(this.state.style)
    LogUtil.i('ActionBar_render()', this.props)

    return (
      <View style={[styles.container, {backgroundColor: barStyle.backgroundColor}, this.props.style]}>{
        <TouchableOpacity
          style={[
            styles.button,
            style_A.funcHide(this.state.hideBack)
          ]}
          onPress={() => this._back()
          }>
          <Image
            source={barStyle.backSrc}/>
        </TouchableOpacity>
      }
        <Text style={{color: barStyle.titleColor, fontSize: barStyle.titleSize}}>{this.state.title}</Text>

      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    //0,1
    flexDirection: 'row',     //row,column
    justifyContent: 'flex-start', //主轴方向
    alignItems: 'center', //垂直主轴方向
    paddingTop: Platform.OS === 'ios' ? dp(20) : 0,
    height: Platform.OS === 'ios' ? dp(68) : dp(48),
  },

  button: {
    flexDirection: 'column',     //row,column
    justifyContent: 'center', //主轴方向
    alignItems: 'center', //垂直主轴方向
    width: dp(44),
    height: dp(44)
  },
})

export default ActionBar