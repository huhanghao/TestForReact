/**
 * Created by huhanghao on 2017/12/6.
 */
import React, {Component} from 'react';

import {TabBarTop, TabNavigator} from "react-navigation";

import HomeScreen from "./TabPages/TabScreen1";
import NearByScreen from "./TabPages/TabScreen2";
import MineScreen from "./TabPages/TabScreen3";

class TabNavPage extends Component {
    render() {
        return (
            <Tab/>
        );
    }
}

const TabRouteConfigs = {
    Tab1: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Tab1',
        }),
    },
    Tab2: {
        screen: NearByScreen,
        navigationOptions: {
            tabBarLabel: 'Tab2',
        },
    }
    ,
    Tab3: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: 'Tab3',
        },
    }
};

const TabNavigatorConfigs = {
    initialRouteName: 'Tab1',
    tabBarComponent: TabBarTop,     // 设置为顶部的Component
    tabBarPosition: 'top',          // 位置在顶部
    lazy: true,
    backBehavior:'none',
    tabBarOptions: {
        activeTintColor: '#180',
        inactiveTintColor: '#eee',
        showIcon: false,
        scrollEnabled:false,
    }
};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default TabNavPage;