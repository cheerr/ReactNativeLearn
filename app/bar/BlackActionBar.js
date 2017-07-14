/**
 * Created by chenwei on 2017/7/13.
 */


import React, {Component} from 'react';
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
    TouchableWithoutFeedback
} from 'react-native';
import ActionBar from "./ActionBar";
import LogUtil from "../utils/LogUtil";

// 类继承
class BlackActionBar extends ActionBar {

    constructor(props) {
        super(props);
    }

    /**
     *
     * @returns {{barShowBack: boolean, barColor: string, barTitleColor: string}}
     * @Override 重写方法
     */
    initDefaultProps() {//设置默认属性
        return {
            barColor: '#000',
            barTitleColor: '#fff'
        };
    }

    render() {

        LogUtil.i("BlackActionBar()", this.props);

        return (
            <View>
                {super.render()}
            </View>
        );
    }

}


export default BlackActionBar