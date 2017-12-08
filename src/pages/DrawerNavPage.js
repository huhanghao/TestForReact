/**
 * Created by huhanghao on 2017/12/4.
 */
import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import {DrawerNavigator, TabBarBottom} from "react-navigation";

import HomeScreen from "./TabPages/TabScreen1";
import NearByScreen from "./TabPages/TabScreen2";
import MineScreen from "./TabPages/TabScreen3";

const tab1Normal = require('../part/img/tab_1_normal.png');
const tab1Selected = require('../part/img/tab_1_selected.png');
const tab2Normal = require('../part/img/tab_2_normal.png');
const tab2Selected = require('../part/img/tab_2_selected.png');
const tab3Normal = require('../part/img/tab_3_normal.png');
const tab3Selected = require('../part/img/tab_3_selected.png');

class DrawerNavPage extends Component {
    render() {
        return (
            <Drawer/>
        );
    }
}
const DrawerRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            drawerLabel: '首页',
            drawerIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab1Normal : tab1Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            ),
        }),
    },
    NearBy: {
        screen: NearByScreen,
        navigationOptions: {
            drawerLabel: '附近',
            drawerIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab2Normal : tab2Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            ),
        },
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            drawerLabel: '我的',
            drawerIcon: ({focused, tintColor}) => (
                <Image source={ focused ? tab3Normal : tab3Selected}
                       style={ {tintColor: tintColor, width: 23, height: 23} }
                />
            ),
        },
    }
};
const DrawerNavigatorConfigs = {
    initialRouteName: 'Home',
    lazy: true,
    backBehavior:'none',
    tabBarOptions: {}
};
const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);

export default DrawerNavPage;