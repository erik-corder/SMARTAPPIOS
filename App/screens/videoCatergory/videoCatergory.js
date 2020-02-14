/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import axios from 'axios';

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import NavBar from '../../components/NavBar/NavBar';
// import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import { color, exp } from 'react-native-reanimated';

class VideoCatergory extends React.Component {

    render() {
        return (
            <>
                <NavBar />
                <View style={styles.container}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('videoList')}>
                        <Image
                            style={{ width: 250, height: 150 }}
                            source={require('../../assets/image/TrainingVideo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoList') }}>
                        <Image
                            style={{ width: 250, height: 154 }}
                            source={require('../../assets/image/HowToVideo.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.reg_btn}>
                    </View>
                </View>
            </>
        );
    }
}

// const TabNavigator = createMaterialBottomTabNavigator({
//     Home: {screen:Home,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             activeColor: '#ff0000',
//             inactiveColor: '#000000',
//             barStyle: {backgroundColor:'#67baf6'},
//             tabBarIcon:()=>(
//                 <View>
//                     <Icon name= {'home'} size = {25} style={{color:'#ff0000'}}/>
//                 </View>
//             )
//         }
//     },
//     Login: {screen:Login,
//         navigationOptions: {
//             tabBarLabel: 'Login',
//             activeColor: '#ff0000',
//             inactiveColor: '#000000',
//             barStyle: {backgroundColor:'#67baf6'},
//             tabBarIcon:()=>(
//                 <View>
//                     <Icon name= {'Person'} size = {25} style={{color:'#ff0000'}}/>
//                 </View>
//             )
//         }
//     },
//     // Cart: {screen:Cart,
//     //     navigationOptions: {
//     //         tabBarLabel: 'Cart',
//     //         activeColor: '#ff0000',
//     //         inactiveColor: '#000000',
//     //         barStyle: {backgroundColor:'#67baf6'},
//     //         tabBarIcon:()=>(
//     //             <View>
//     //                 <Icon name= {'add-shopping-cart'} size = {25} style={{color:'#ff0000'}}/>
//     //             </View>
//     //         )
//     //     }
//     // }
// })

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    log_btn: {
        marginTop: 10,
    },
    reg_btn: {
        marginTop: 10
    },
    textContiner: {
        width: 250,
    },
    textStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 250,
        marginTop: 10
    }
}

export default VideoCatergory;

// export default createAppContainer(TabNavigator);
