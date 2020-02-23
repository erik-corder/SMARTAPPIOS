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
    Dimensions,
} from 'react-native';

import { createBottomTabNavigation, createAppContainer, DrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import Catalog from '../Catalog/Catalog';
import Profile from '../Profile/Profile';


class LoginHome extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <ScrollView>
                    <View style={styles.body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoCatergory') }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth * 0.25, paddingVertical: screenHeight * 0.05, marginVertical: '5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/video.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>Rcp Videos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RCPmanual') }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth * 0.25, paddingVertical: screenHeight * 0.05, marginVertical: '2.5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/Docs.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>Rcp Manuals</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../../assets/image/home_n.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Favorite_video') }}>
                        <Image source={require('../../assets/image/star_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 12 }}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../../assets/image/catalogue_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>RCP Ctalogaues</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../../assets/image/profile_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



const styles = {
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#fff',
        // marginTop: '20%'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        width: '100%',
        elevation: 3,
        flexDirection: 'row',
        backgroundColor: appColor.yellow,
        justifyContent: 'space-around'
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}


export default createAppContainer(LoginHome);
