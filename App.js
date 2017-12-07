import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {StackNavigator, NavigationActions} from 'react-navigation';
import TestPage1 from'./src/pages/OriginJumpPage'
import TestPage2 from'./src/pages/ChangeNavTitlePage'
import TestPage3 from'./src/pages/StackNavPage'
import TestPage4 from'./src/pages/TopTabNavPage'
import TestPage5 from'./src/pages/BottomTabNavPage'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('page1', { user: 'Lucy' ,cao:'123'})}
                    title="open page1"
                />
                <Button
                    onPress={() => navigate('page2', { user: 'Lucy' ,cao:'123'})}
                    title="open page2"
                    style={{
                       marginTop:50,
                        textColor:'#333333',
                    }}
                />
                <Button
                    onPress={() => navigate('page3')}
                    title="open page3"
                    style={{
                       marginTop:50,
                        textColor:'#333333',
                    }}
                />
                <Button
                    onPress={() => navigate('page4')}
                    title="open page4"
                    style={{
                       marginTop:50,
                        textColor:'#333333',
                    }}
                />
                <Button
                    onPress={() => navigate('page5')}
                    title="open page5"
                    style={{
                       marginTop:50,
                        textColor:'#333333',
                    }}
                />
            </View>
        );
    }
}

const SimpleAppNavigator = StackNavigator({
    Home: {screen: HomeScreen},
    page1: {screen: TestPage1,
        navigationOptions: ({navigation}) => ({
            title : "pageInit",//左上角的返回键文字, 默认是上一个页面的title  IOS 有效
        })},
    page2: {screen: TestPage2,
        navigationOptions: ({navigation}) => ({
            // headerBackTitle : "返回",//左上角的返回键文字, 默认是上一个页面的title  IOS 有效
            headerStyle: {
                backgroundColor: '#567'
            },
            //导航栏的title的style
            headerTitleStyle: {
                color: 'green',
                alignSelf : 'center',//居中显示
                marginRight:70
            },
            //返回按钮的颜色
            headerTintColor : 'red',
        })},
    page3: {
        screen: TestPage3,
        navigationOptions: ({navigation}) => ({
            // title: 'My Profile',
            headerTitle: (
                <Icon
                    name="rocket"   //设置图片
                    size={30}   //图片大小
                    color="black"  //图片颜色
                    style={{
                            justifyContent:'center',
                            marginLeft: 120
                        }}
                />
            ),
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        let resetAction = NavigationActions.reset({
                                index: 1,
                                actions: [ NavigationActions.navigate({ routeName: 'Home'}),
                                            NavigationActions.navigate({ routeName: 'page1'})],

                                key: null
                        })
                    navigation.dispatch(resetAction)}}>

                    <Icon
                        name="rocket"   //设置图片
                        size={30}   //图片大小
                        color="black"  //图片颜色
                        style={{
                            marginLeft: 20,
                        }}
                    />
                </TouchableOpacity>
            )
        })
    },
    page4: {screen: TestPage4,
        navigationOptions: ({navigation}) => ({
            title : "page4",
        })},
    page5: {screen: TestPage5,
        navigationOptions: ({navigation}) => ({
            title : "page5",
        })},
},{
    initialRouteName: 'Home', // 初始显示的界面
    onTransitionStart: ()=>{
        ToastAndroid.show('导航栏切换开始', ToastAndroid.SHORT); },  // 回调
    onTransitionEnd: ()=>{
        ToastAndroid.show('导航栏切换结束', ToastAndroid.SHORT);},  // 回调
});

class App extends React.Component {
    render() {
        return (
            <SimpleAppNavigator/>
        );
    }
}

export default App;
