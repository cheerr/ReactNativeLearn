/**
 * Created by chenwei on 2017/7/12.
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
    TouchableWithoutFeedback,
    BackHandler
} from 'react-native';
import LogUtil from "../utils/LogUtil";
import TextUtil from "../utils/TextUtil";
import {dp} from "../utils/PixelUtil";
import style_A from "../style/customStyle";


class ActionBar extends Component {
    //
    // static propTypes = {
    //     title: React.PropTypes.string,
    //     barBackHide: React.PropTypes.boolean,
    // };//用这种方式防止类型错误

    constructor(props) {
        super(props);
        LogUtil.i("ActionBar_constructor()", this.props);
        this._initState();

    }


    initDefaultProps() {//设置默认属性
        return {
            barBackHide: false,
            barColor: '#fff',
            barTitleColor: '#000'
        };
    };


    /**
     * 初始化state
     * @private  _开头的就是私有方法
     */
    _initState() {

        this.state = this.initDefaultProps();

        let screenProps = this.props.screenProps;
        let outProps = screenProps ? screenProps.outProps : undefined;
        let navigation = this.props.nav;

        if (navigation.state.routeName === outProps.screen) {
            this.state.sysBack = true;
            this.state.title = outProps.title;
        } else {
            this.state.sysBack = false;
        }

        if (!TextUtil.isEmpty(this.props.title))
            this.state.title = this.props.title;

        //如果props里有barBackHide 就覆盖
        if (this.props.barBackHide !== undefined) {
            this.state.barBackHide = this.props.barBackHide;
        }

        LogUtil.i("_initState", this.state);
    }

    //@Override 重写方法
    componentDidMount() {
        // let navigation = this.props.nav;
        // //貌似没用，只能改变当前页面的navigation
        // navigation.setParams({
        //     notFirst: true
        // });
    }

    /**
     * 设置title
     * @param title
     */
    setTitle(title) {
        this.setState({
            title: title
        });
    }


    _back() {
        LogUtil.i("_back()", this.state);

        if (this.state.sysBack) {
            this.props.nav.goBack();
            BackHandler.exitApp();
        } else {
            this.props.nav.goBack();
        }
    }

    render() {
        LogUtil.i("ActionBar_render()", this.props);

        return (
            <View style={[styles.container, {backgroundColor: this.state.barColor}]}>{
                <TouchableOpacity
                    style={[
                        styles.button,
                        style_A.funcHide(this.state.barBackHide)
                    ]}
                    activeOpacity={0.7}
                    onPress={() => this._back()
                    }>
                    <Image
                        source={require('../res/img/action_blue_back.png')}/>
                </TouchableOpacity>
            }
                <Text style={{color: this.state.barTitleColor}}>{this.state.title}</Text>

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
        height: dp(44),
        backgroundColor: '#fff',
    },

    button: {
        flexDirection: 'column',     //row,column
        justifyContent: 'center', //主轴方向
        alignItems: 'center', //垂直主轴方向
        width: dp(44),
        height: dp(44)
    },
});

export default ActionBar