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

class TrainingManualCard extends React.Component {

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
        console.log(videos);
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Player') }}>
                    <Image style={styles.thumbnail} source={require('../../assets/image/sampaleVideo.png')} />
                    <Text style={styles.title}>Video</Text>
                    <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text>
                    <Text style={{ fontSize: 10, marginHorizontal: 30, color: appColor.gray, width: 100 }}>Description of the product goes here, of our planet</Text>
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

export default TrainingManualCard;

