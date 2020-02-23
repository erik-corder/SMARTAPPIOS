/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//components
import appColor from '../../src/utils/AppColor';

class TabBar extends React.Component {

    render() {
        return (
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={require('../../assets/image/home_n.png')} style={{ width: 40, height: 40 }}></Image>
                    <Text style={{ fontSize: 11 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
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
        );
    }
}

const styles = {
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

export default TabBar;
