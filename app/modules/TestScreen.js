/**
 * Created by chenwei on 2017/7/11.
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
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native'
import BaseScreen from '../base/BaseScreen'
import Toast from '../utils/Toast'
import style_A from '../style/customStyle'
import ActionBar from '../bar/ActionBar'
import Screens from '../navigator/Screens'

class Test extends BaseScreen {


  //
  static navigationOptions = ({navigation, screenProps}) => ({
    header: <ActionBar
      nav={navigation}
      screenProps={screenProps}
      data={
        {
          title: 'FlatList',
          style: 'black'
        }
      }/>
  })

  constructor (props) {
    super(props)
    this.state = this._createState()
  }

  /**
   * 构造state字典
   * @private
   */
  _createState () {
    let array = []
    for (let i = 0; i < 30; i++) {
      array[i] = {
        style: i % 5,
        text: 'data' + i
      }
    }
    return {
      source: array
    }
  }

  _fetchView = ({item}) => {

    switch (item.style) {
      case 0: {
        return <Text style={[style_A.font_black_normal]}>{'跳转到Hello'}</Text>
      }
      case 1: {
        return <TextInput
          multiline={true}
          style={[style_A.inputText_black_normal, style_A.widthAll]}
          placeholder="说几句吧!"
          returnKeyType="default"
          underlineColorAndroid="transparent"/>
      }
      default: {
        return <Text style={[style_A.font_black_normal]}>{item.text}</Text>
      }
    }
  }

  render () {
    const {navigate} = this.props.navigation

    let flatItemCanvas = ({item}) => {
      return (<TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          item.style === 0 ? navigate(Screens.Hello) : Toast.show(item.text)}>

        <View style={[style_A.center, style_A.background_fff, style_A.height48]}>
          {this._fetchView({item})}
        </View>

      </TouchableOpacity>)
    }
    return (
      <View style={style_A.container}>
        <FlatList style={{width: window.width}}
                  data={this.state.source}
                  renderItem={flatItemCanvas}
        />

      </View>
    )
  }
}

export default Test