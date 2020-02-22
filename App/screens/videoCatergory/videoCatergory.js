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
    SafeAreaView,
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
            <View style={{backgroundColor:appColor.white}}>
                <NavBar />
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Catalog') }}>
                                <View style={{ alignItems: 'center', width: '90%', height: '60%', borderColor: appColor.balck, borderWidth: 5, borderRadius: 10, paddingTop: '10%', paddingRight: '25%', paddingLeft: '25%', marginTop: '20%' }}>
                                    <Image
                                        style={{ width: 120, height: 120, }}
                                        source={require('../../assets/image/how-to.png')}
                                    />
                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rcp Videos</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('videoCatergory') }}>
                                <View style={{ alignItems: 'center', width: '90%', height: '60%', borderColor: appColor.balck, borderWidth: 5, borderRadius: 10, paddingTop: '10%', paddingRight: '25%', paddingLeft: '25%', marginTop: '-10%', marginBottom: '28%' }}>
                                    <Image
                                        style={{ width: 120, height: 120, }}
                                        source={require('../../assets/image/training.png')}
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

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
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
