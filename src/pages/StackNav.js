/**
 * Created by huhanghao on 2017/12/4.
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';




class StackNavTest extends React.Component {

    constructor(props){
        super(props);
    }

    // static navigationOptions = {
    //     title:`page3_TestforStackNav`,
    // };

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with 123</Text>
            </View>
        );
    }
}


export default StackNavTest;