/**
 * Created by chenwei on 2017/7/11.
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

import BaseScreen from "../base/BaseScreen";
import ActionBar from "../bar/ActionBar";


class Hello extends BaseScreen {


    constructor(props) {
        super(props);
    }


    static navigationOptions = ({navigation, screenProps}) => ({
        header: <ActionBar title={"Hello"}
                           nav={navigation}
                           screenProps={screenProps}/>
    });


    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7}
                                  onPress={() => navigate('Test')}>
                    <Text style={styles.text}>跳转Test</Text>

                </TouchableOpacity>
            </View>
        )
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',//主轴方向
        alignItems: 'flex-start',  //垂直主轴方向
    },
    text: {
        color: '#E53935'
    }
});


export default Hello

