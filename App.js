/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    ToastAndroid,
    Text,
    View,
    Navigator
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const initialRoute = { name: 'loginPage'}

// Navigator跳转规则
function RouteMapper(route, navigation) {
    // todo ,根据route 返回相应的场景
    if (route.name === 'LoginPage') {
        return (
            <LoginPage navigator={navigation} />
        );
    }
    // else if (route.name === 'MainPage') {
    //     return (
    //         <MainPage navigator={navigation} />
    //     );
    // } else if (route.name === 'OrderPinDetailPage') {
    //     return (
    //         <OrderPinDetailPage {...route.params} navigator={navigation} />
    //     );
    // } else if (route.name === 'OrderBaoDetailPage') {
    //     return (
    //         <OrderBaoDetailPage {...route.params} navigator={navigation} />
    //     );
    // } else if (route.name === 'OrderGovDetailPage') {
    //     return (
    //         <OrderGovDetailPage {...route.params} navigator={navigation} />
    //     );
    // } else if (route.name === 'OrderAirDetailPage') {
    //     return (
    //         <OrderAirDetailPage {...route.params} navigator={navigation} />
    //     );
    // }else if (route.name === 'MorePage') {
    //     return (
    //         <MorePage navigator={navigation} />
    //     );
    // } else if (route.name === 'QRcodePageAndroid') {
    //     return (
    //         <QRcodePageAndroid {...route.params} navigator={navigation} />
    //     );
    // } else if (route.name === 'QRcodePageiOS') {
    //     return (
    //         <QRcodePageiOS {...route.params} navigator={navigation} />
    //     );
    // } else if (route.name === 'TestPage') {
    //     return (
    //         <OrderAirDetailPage
    //             navigator={navigation} />
    //     );
    // } else if (route.name === 'UpdatePage') {
    //     return (
    //         <UpdatePage
    //             {...route.params}
    //             navigator={navigation} />
    //     )
    // } else if (route.name === 'ChangePSWPage') {
    //     return (
    //         <ChangePSWPage
    //             navigator={navigation} />
    //     )
    // } else if (route.name === 'AboutUsPage') {
    //     return (
    //         <AboutUsPage
    //             navigator={navigation} />
    //     )
    // } else if (route.name === 'RollBusPage') {
    //     return (
    //         <RollBusPage
    //             navigator={navigation} />
    //     );
    // }
}


export default class App extends Component<{}> {
    render() {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //         Welcome to React Native!
            //     </Text>
            //     <Text style={styles.instructions}>
            //         To get started, edit App.js
            //     </Text>
            //     <Text style={styles.instructions}>
            //         {instructions}
            //     </Text>
            //     <Text style={ styles.btnText }>
            //         { this.state.appKey }
            //     </Text>
            // </View>
            <Navigator
                initialRoute={initialRoute}
                renderScene={RouteMapper}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
