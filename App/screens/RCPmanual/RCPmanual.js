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

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
// import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';
import { color, exp } from 'react-native-reanimated';

class RCPManual extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {/* <Image
                    style={{ width: 50, height: 50, marginBottom: 20 }}
                    source={require('../../assets/image/logo.png')}
                /> */}
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Catalogs') }}>
                    <Image
                        style={{ width: 250, height: 150 }}
                        source={require('../../assets/image/trainManual.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Catalogs') }}>
                    <Image
                        style={{ width: 250, height: 154 }}
                        source={require('../../assets/image/howtomanuals.png')}
                    />
                </TouchableOpacity>
                <View style={styles.reg_btn}>
                </View>
            </View>

        );
    }
}

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

export default RCPManual;