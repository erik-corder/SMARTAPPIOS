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

    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <ScrollView>
                    <View style={styles.body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Catalog') }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth*0.23, paddingVertical: screenHeight*0.05, marginVertical: '5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/training.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>Training Videos</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Catalog') }}>
                            <View style={{ borderWidth: 3, borderRadius: 15, paddingHorizontal: screenWidth*0.25, paddingVertical: screenHeight*0.05, marginVertical: '5%', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 120, height: 120, }}
                                    source={require('../../assets/image/how-to.png')}
                                />
                                <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: '5%' }}>How To Video</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TabBar />
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
    }
}

export default VideoCatergory;

// export default createAppContainer(TabNavigator);
