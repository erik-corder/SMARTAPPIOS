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

class TrainVideoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        const { videos } = this.props;
        return (
            <View style={{ width: '50%' }}>
                <TouchableOpacity onPress={() => this.route()}>
                    <Image style={styles.thumbnail} source={{ uri: videos.thumbnail_medium }} />
                    <Text style={styles.title}>{videos.name}</Text>
                    <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
                    <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>{videos.description}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
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
    }
}

export default TrainVideoCard;

