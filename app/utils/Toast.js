/**
 * Created by chenwei on 2017/7/13.
 */


import React from 'react';
import {
    ToastAndroid,
} from 'react-native';


const Toast = {

    show: function () {
        if (arguments.length === 0) return;
        if (arguments.length === 1) {
            ToastAndroid.show(arguments[0], ToastAndroid.SHORT)
            return;
        }
        ToastAndroid.show(arguments[0], parseInt(arguments[1]))
    },
};

export default Toast;
