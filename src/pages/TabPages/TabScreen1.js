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
import netUtil from 'TestForReact/src/Utils/ApiUtils';

class TabScreen1 extends React.Component {


    requestDataFromNet = () => {
        netUtil.getRequest();

    }

    render() {
        return (
            <View>
                <Text>TabScreen1</Text>
                <Button
                    title="加载网络数据"
                    onPress={this.requestDataFromNet}
                />
            </View>
        );
    }
}


export default TabScreen1;