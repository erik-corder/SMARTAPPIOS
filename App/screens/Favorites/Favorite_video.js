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
    FlatList,
    ScrollView
} from 'react-native';

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

//components
import Button from '../../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import { Thumbnail } from 'react-native-thumbnail-video';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';

class Favorite_video extends React.Component {

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <NavBarDefault name={'Favorite Video'} />
                <ScrollView>
                    <View style={styles.body}>
                        <SearchBar
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                            inputContainerStyle={{ backgroundColor: appColor.white, width: '90%', borderColor: appColor.white }}
                            containerStyle={{ backgroundColor: appColor.white, borderWidth: 0, borderColor: appColor.balck, borderTopWidth: 0, height: 50 }}
                            value={search}
                        />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Player') }}>
                                    <Image style={styles.thumbnail} source={require('../../assets/image/sampaleVideo.png')} />
                                    <Text style={styles.title}>Video</Text>
                                    <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
                                    <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>Description of the product goes here, of our planet</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Player') }}>
                                    <Image style={styles.thumbnail} source={require('../../assets/image/sampaleVideo.png')} />
                                    <Text style={styles.title}>Video</Text>
                                    <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
                                    <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>Description of the product goes here, of our planet</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Player') }}>
                                    <Image style={styles.thumbnail} source={require('../../assets/image/sampaleVideo.png')} />
                                    <Text style={styles.title}>Video</Text>
                                    <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
                                    <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>Description of the product goes here, of our planet</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('LoginHome') }}>
                        <Image source={require('../../assets/image/home_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../../assets/image/star_n.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 12 }}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../../assets/image/catalogue_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>RCP Ctalogaues</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Profile') }}>
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

    },
    body: {
        flex: 1
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 150,
        marginHorizontal: 30,
        marginVertical: 10,
        marginTop: '5%'
    },
    title: {
        marginHorizontal: 30,
        fontSize: 15,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        width: '90%',
        marginTop: '2%',
        borderBottomWidth: 2,
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

export default Favorite_video;

