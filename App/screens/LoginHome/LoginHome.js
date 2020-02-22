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
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
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
            <View style={{ backgroundColor: appColor.white }}>
                <View>
                    <NavBar />
                </View>
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoCatergory') }}>
                                <View style={{ alignItems: 'center', width: '90%', height: '60%', borderColor: appColor.balck, borderWidth: 5, borderRadius: 10, paddingTop: '10%', paddingRight: '25%', paddingLeft: '25%', marginTop: '20%' }}>
                                    <Image
                                        style={{ width: 120, height: 120, }}
                                        source={require('../../assets/image/video.png')}
                                    />
                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rcp Videos</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoCatergory') }}>
                                <View style={{ alignItems: 'center', width: '90%', height: '60%', borderColor: appColor.balck, borderWidth: 5, borderRadius: 10, paddingTop: '10%', paddingRight: '25%', paddingLeft: '25%', marginTop: '-10%', marginBottom: '28%' }}>
                                    <Image
                                        style={{ width: 120, height: 120, }}
                                        source={require('../../assets/image/Docs.png')}
                                    />
                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rcp Manuals</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView >
                </SafeAreaView>
            </View>
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

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: '20%'
    }
}


export default createAppContainer(TabNavigator);
