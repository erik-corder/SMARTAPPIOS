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
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import axios from 'axios';

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
// import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import { color, exp } from 'react-native-reanimated';

class VideoCatergory extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {},
            Loading: true,
            vt_data: [],
            vh_data: []
        }
    }

    componentDidMount() {
        this._retrieveName();

    }

    _retrieveName = async () => {
        try {
            const jwtToken = await AsyncStorage.getItem('jwtToken');

            this.setState({
                token: jwtToken
            });
            this._getVideos();
        } catch (error) {
            // Error retrieving data
        }
        // console.log(this.state.token);
    };

    _getVideos = () => {
        console.log('he he');
        const AuthStr = 'Bearer '.concat(this.state.token);
        axios.get('https://apidev.rcpanz.com.au/api/admin/categories', { headers: { Authorization: AuthStr } })
            .then(response => {
                // If request is good...
                this.setState({
                    data: response.data,
                    Loading: false
                });
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    render() {

        const { data, Loading,vh_data, vt_data } = this.state;

        if (Loading == false) {
            var video_data = data.result.map((element, i) => {
                if(element.name === 'Training Videos'){
                    vt_data.push(element);
                }else if(element.name === 'How to Videos'){
                    vh_data.push(element);
                }                
            });
        }

        return (
            <View style={styles.container}>
                <NavBar />
                <ScrollView>
                    <View style={styles.body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('TrainVideo',vt_data) }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth * 0.23, paddingVertical: screenHeight * 0.075, marginVertical: '5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/training.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>Training Videos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('HowToVideo',vh_data) }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth * 0.25, paddingVertical: screenHeight * 0.075, marginVertical: '5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/how-to.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>How To Videos</Text>
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
                    <TouchableOpacity style={styles.tabItem}  onPress={() => { this.props.navigation.navigate('RCPmanual') }}>
                        <Image source={require('../../assets/image/catalogue_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>RCP Catalogue</Text>
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

export default VideoCatergory;

// export default createAppContainer(TabNavigator);
