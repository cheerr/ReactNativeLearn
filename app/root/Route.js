/**
 * Created by chenwei on 2017/7/11.
 *
 * 处理分发业务
 */

import React, {Component} from 'react';

import INavigator from "../navigator/INavigator";
import LogUtil from "../utils/LogUtil";
import RnApp from "../constant/RnApp";


class Route extends Component {


    //这个screen应该由外部传入
    static defaultProps = {
        screen: RnApp.MainPage,
        title: ""
    };

    render() {

        LogUtil.i("Route_render", this.props);

        let routeName = this.props.screen === undefined ? RnApp.MainPage : this.props.screen;

        //这边this.props所带的参数就是Native传递过来的参数，这边将他放到INavigator的outProps里

        return (
            <INavigator outProps={this.props} routeName={routeName}/>
        )
    }
}

export default Route;
