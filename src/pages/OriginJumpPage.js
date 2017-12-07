/**
 * Created by huhanghao on 2017/12/4.
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

class TestForJump extends React.Component {

    constructor(props) {
        super(props);
    }


    static navigationOptions = {
        title: `page1`,
    };

    state = {
        selectedTab: 'find',
    };

    loginWithFacebook = () => {   //点击"Login with Facebook"按钮后触发的方法
        ToastAndroid.show('facebook', ToastAndroid.SHORT);

        // 清除，回到Home
        // let resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [ NavigationActions.navigate({ routeName: 'Home'})],
        //     key: null
        // })
        // this.props.navigation.dispatch(resetAction);

        this.props.navigation.goBack();
    }


    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name="rocket"   //设置图片
                    size={30}   //图片大小
                    color="red"  //图片颜色
                />

                <Icon.Button    //在图片后加文字
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={this.loginWithFacebook}>
                    Login with Facebook
                </Icon.Button>

                <Icon.Button  //在图片后加, 自定义样式的文字
                    name="facebook"
                    backgroundColor="#3b5998">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
                </Icon.Button>

                <Icon.TabBarItem  //用 Icon.TabBarItem 代替 TabBarIOS.Item
                    title="发现"
                    iconName="home"
                    selectedIconName="home"
                    selected={this.state.selectedTab === 'find'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'find',
                        });
                    }}>
                </Icon.TabBarItem>

            </View>
        );
    }
}


export default TestForJump;