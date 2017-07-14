/**
 * Created by chenwei on 2017/7/12.
 */


import RnApp from "../constant/RnApp";

const LogUtil = {
    // ()=>中参数arguments 和function（）不一样
    i: function () {
        if (arguments.length === 0) return;
        if (arguments.length === 1) {
            if (RnApp.DEBUG) {
                console.log(RnApp.TAG, arguments[0]);
            }
            return;
        }
        let tag = RnApp.TAG + "_" + arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (RnApp.DEBUG) {
                console.log(tag + "(" + i + ")", arguments[i]);
            }
        }
    },
};

export default LogUtil;


