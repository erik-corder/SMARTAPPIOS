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
    ScrollView,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';

//components
import Button from '../../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import { Thumbnail } from 'react-native-thumbnail-video';
import NavBar from '../../components/NavBar/NavBar';
import TabBar from '../../components/TabBar/TabBar';
import TrainVideoCard from '../../components/VideoCard/TrainVideoCard';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';

class TrainVideo extends React.Component {

    constructor() {
        super();
        this.state = {
            trainVideoData: [],
            Loading: true
        }
    }

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('videoCatergory');
    }

    componentDidMount() {
        this._retrieveName();
    }

    proceedPlayer = () => {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('SingleTrainingVideo');
    }

    _retrieveName = async () => {
        try {
            const jwtToken = await AsyncStorage.getItem('jwtToken');
            this.setState({
                token: jwtToken
            });
            this._getTrainingVideo();
        } catch (error) {
            // Error retrieving data
        }
    };

    _getTrainingVideo() {
        // const { params } = this.props.navigation.state;
        // this.setState({
        //     trainVideoData: params,
        //     Loading: false
        // });
        const AuthStr = 'Bearer '.concat(this.state.token);
        axios.get('https://apidev.rcpanz.com.au/api/customer/search/videos/11/all/w?search_key=', { headers: { Authorization: AuthStr } })
            .then(response => {
                // If request is good...
                this.setState({
                    data: response.data.result,
                    Loading: false
                });
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {

        const { search, trainVideoData, Loading, data } = this.state;
        // if (Loading === false) {
        //     console.log(trainVideoData);
        // }

        console.log(data);
        return (
            <View style={styles.container}>
                <NavBarDefault name={'RCP Training Video'} onPress={() => this.proceedBack()} />
                <ScrollView>
                    <View style={styles.body}>
                        <SearchBar
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                            inputContainerStyle={{ backgroundColor: appColor.white, width: '90%', borderColor: appColor.white }}
                            containerStyle={{ backgroundColor: appColor.white, borderWidth: 0, borderColor: appColor.balck, borderTopWidth: 0, height: 50 }}
                            value={search}
                        />
                        <View style={{ flex: 1, flexDirection: 'row',flexWrap: 'wrap',alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            {Loading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                    data.map((videos, i) => (
                                        <TrainVideoCard key={i} videos={videos} onPress={() => this.proceedPlayer()} />
                                    ))
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('LoginHome') }}>
                        <Image source={require('../../assets/image/home_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Favorite_video') }}>
                        <Image source={require('../../assets/image/star_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 12 }}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('RCPmanual') }}>
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
        flex: 1
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 150,
        marginHorizontal: 30,
        // marginVertical: 10,
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

export default TrainVideo;

