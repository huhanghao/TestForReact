/**
 * Created by huhanghao on 2017/12/5.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

class page2 extends React.Component {

    constructor(props) {
        super(props);
        const {setParams} = this.props.navigation;
        setParams({title: "page2"})
    }

    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: `${state.params.title ? state.params.title : '没有title'}`,
        };
    };

    ChangeThisTitle = (titleText) => {
        const {setParams} = this.props.navigation;
        setParams({title: titleText})
    }

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const {params} = this.props.navigation.state;

        return (
            <View>
                <Text>Chat with {params.user}</Text>

                <Button title="change title text"
                        onPress={()=>{ this.ChangeThisTitle("TEXT") }}/>
            </View>
        );
    }
}

export default page2;