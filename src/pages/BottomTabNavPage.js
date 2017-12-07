/**
 * Created by huhanghao on 2017/12/7.
 */
import React, {Component} from 'react';

import {
    Image,
} from 'react-native';
import {TabBarBottom, TabNavigator} from "react-navigation";

import HomeScreen from "./TabPages/TabScreen1";
import NearByScreen from "./TabPages/TabScreen2";
import MineScreen from "./TabPages/TabScreen3";

const tab1Normal = require('../part/img/tab_1_normal.png');
const tab1Selected = require('../part/img/tab_1_selected.png');
const tab2Normal = require('../part/img/tab_2_normal.png');
const tab2Selected = require('../part/img/tab_2_selected.png');
const tab3Normal = require('../part/img/tab_3_normal.png');
const tab3Selected = require('../part/img/tab_3_selected.png');

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
            drawerLabel: 'Tab1',
            tabBarIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab1Normal : tab1Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            )
        }),
    },
    Tab2: {
        screen: NearByScreen,
        navigationOptions: {
            drawerLabel: 'Tab2',
            tabBarIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab2Normal : tab2Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            )
        },
    }
    ,
    Tab3: {
        screen: MineScreen,
        navigationOptions: {
            drawerLabel: 'Tab3',
            tabBarIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab3Normal : tab3Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            )
        },
    }
};

const TabNavigatorConfigs = {
    initialRouteName: 'Tab1',
    tabBarComponent: TabBarBottom,      // 设置为底部的Component
    tabBarPosition: 'bottom',           // 位置在底部
    lazy: true,
    swipeEnabled:false,                 // 设置不能滑动
    backBehavior:'none',
    tabBarOptions: {
        activeTintColor: '#180',
        activeBackgroundColor: '#ff7',
        inactiveTintColor: '#333',
        inactiveBackgroundColor:'#567',
        showIcon: true,
    },
};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default TabNavPage;