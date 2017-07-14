/**
 * Created by chenwei on 2017/7/13.
 */
import React from 'react';

import {
    PixelRatio
} from 'react-native';

//  mdpi for android
const PIXEL_RATIO_160_1 = 1;
// hdp from android
const PIXEL_RATIO_240_1d5 = 1.5;
// iphone4, 4s, 5, 5c, 5s, 6, 7; xhdpi from android
const PIXEL_RATIO_320_2 = 2;
// iphone6p, 7p; xxhdpi for android,1080p
const PIXEL_RATIO_480_3 = 3;
// larger from android
const PIXEL_RATIO_560_3x5 = 3.5;

// 设置基准分辨率
const BASE_PIXEL_RATIO = PIXEL_RATIO_480_3;

// 根据密度适配不同的分辨率,参数为dp
export function dp(length) {
    // 获取密度
    let ratio = PixelRatio.get();
    if (!length) {
        length = 0;
    }
    return parseInt(length / (BASE_PIXEL_RATIO / ratio));
}

// 根据密度适配不同的分辨率，参数为px
export function px(length) {
    // 获取密度
    let ratio = PixelRatio.get();
    return dp(length / ratio);
}