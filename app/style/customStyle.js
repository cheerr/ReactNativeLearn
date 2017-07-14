/**
 * Created by chenwei on 2017/7/14.
 */

import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import {dp} from "../utils/PixelUtil";

const style_A = StyleSheet.create({

    hidden: {
        display: 'none',  // 'flex' or 'none'
    },

    matchRow: {
        flex: 1,
        flexDirection: 'row',
    },

    matchColumn: {
        flex: 1,
        flexDirection: 'column',
    },

    height48: {
        height: dp(48),
    },

    height60: {
        height: dp(60),
    },

    height90: {
        height: dp(90),
    },

    heightAll: {
        height: Dimensions.get('window').height,
    },

    width200: {
        width: dp(200),
    },

    widthAll: {
        width: Dimensions.get('window').width,
    },

    font_black_normal: {
        fontSize: 16,
        color: '#232323',
        textAlign: 'center',
    },

    inputText_black_normal: {
        fontSize: 16,
        color: '#232323',
        paddingLeft: dp(6),
        paddingRight: dp(6),
    },

    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    background_transparent: {
        backgroundColor: '#00000000'
    },


    background_fff: {
        backgroundColor: '#fff'
    },

    background_000: {
        backgroundColor: '#000'
    },
});

style_A.funcHide = (v) => {
    if (v) {
        return {
            display: 'none'
        };
    } else {
        return {
            display: 'flex'
        };
    }
};


export default style_A;
