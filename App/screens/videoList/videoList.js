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
    FlatList
} from 'react-native';

import { createBottomTabNavigation, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import { Thumbnail } from 'react-native-thumbnail-video';
import NavBar from '../../components/NavBar/NavBar';

//Screens
import Home from '../Home/Home';
import Login from '../Login/Login';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Video 01',
        url: "https://www.youtube.com/watch?v=lgj3D5-jJ74"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Video 01',
        url: "https://www.youtube.com/watch?v=lgj3D5-jJ74"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Video 01',
        url: "https://www.youtube.com/watch?v=lgj3D5-jJ74"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Video 01',
        url: "https://www.youtube.com/watch?v=lgj3D5-jJ74"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Video 01',
        url: "https://www.youtube.com/watch?v=lgj3D5-jJ74"
    },
]

function Item({ title, url }) {
    return (
        <View>
            <Thumbnail style={styles.thumbnail} url={url} />
            <Text style={styles.title}>{title}</Text>
            <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
            <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>Description of the product goes here, of our planet</Text>
        </View>
    );
}

class VideoList extends React.Component {

    render() {
        return (
            <>
                <NavBar />
                <View style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} url={item.url} />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
            </>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        marginHorizontal: 30,
        marginVertical: 10
    },
    title: {
        marginHorizontal: 30,
        fontSize: 15,
    },
}

export default VideoList;

