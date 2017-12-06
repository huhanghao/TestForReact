/**
 * Created by huhanghao on 2017/12/5.
 */
ChatScreen.navigationOptions = ({navigation}) => {
    console.log("---------navigation------------>");
    console.log(navigation);
    //Object {state: Object, dispatch: function, goBack: function, navigate: function, setParams: function}
    return {
        // 展示数据 "`" 不是单引号
        title: `Chat with ${navigation.state.params.user}`,
        // 导航栏的标题, 可以是字符串也可以是个组件 会覆盖 title 的值
        // headerTitle : '返回',
        //右边按钮
        headerRight:(
            <View>
                <Button
                    title="点我"
                    onPress={() => alert("hello")}
                />
            </View>
        ),
        //左上角的返回键文字, 默认是上一个页面的title  IOS 有效
        headerBackTitle : "返回",
        //导航栏的style
        headerStyle: {
            backgroundColor: '#fff'
        },
        //导航栏的title的style
        headerTitleStyle: {
            color: 'green',
            //居中显示
            alignSelf : 'center',
        },
        //按压返回按钮显示的颜色 API > 5.0 有效
        headerPressColorAndroid : 'blue',
        //返回按钮的颜色
        headerTintColor : 'red',
        //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
        gesturesEnabled: true,
    };

};
