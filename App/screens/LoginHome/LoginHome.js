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

import { createBottomTabNavigation, createAppContainer, DrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';



//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import NavBar from '../../components/NavBar/NavBar';
// import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites';
import Catalog from '../Catalog/Catalog';
import Profile from '../Profile/Profile';


class LoginHome extends React.Component {

    render() {
        return (
            <>
                <View>
                    <NavBar />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoCatergory') }}>
                        <Image
                            style={{ width: 250, height: 150 }}
                            source={require('../../assets/image/RCPvideo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('RCPmanual') }}>
                        <Image
                            style={{ width: 250, height: 152 }}
                            source={require('../../assets/image/RcpManuals.png')}
                        />
                    </TouchableOpacity>

                </View>
            </>
        );
    }
}

const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: LoginHome,
        navigationOptions: {
            tabBarLabel: 'Home',
            activeColor: '#ff0000',
            inactiveColor: appColor.red,
            barStyle: { backgroundColor: appColor.yellow },
            tabBarIcon: () => (
                <View>
                    <Icon name={'home'} size={25} style={{ color: '#ff0000' }} />
                </View>
            )
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: { backgroundColor: appColor.yellow },
            tabBarIcon: () => (
                <View>
                    <Icon name={'favorite'} size={25} style={{ color: '#ff0000' }} />
                </View>
            )
        }
    },
    Catalog: {
        screen: Catalog,
        navigationOptions: {
            tabBarLabel: 'Ctalogaues',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: { backgroundColor: appColor.yellow },
            tabBarIcon: () => (
                <View>
                    <Icon name={'book'} size={25} style={{ color: '#ff0000' }} />
                </View>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: { backgroundColor: appColor.yellow },
            tabBarIcon: () => (
                <View>
                    <Icon name={'verified-user'} size={25} style={{ color: '#ff0000' }} />
                </View>
            )
        }
    },
});

// const drowerNavigator = DrawerNavigator({
//     Home : {
//         screen: Home
//     },
//     Login: {
//         screen: Login
//     }

// });

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
}


export default createAppContainer(TabNavigator);
