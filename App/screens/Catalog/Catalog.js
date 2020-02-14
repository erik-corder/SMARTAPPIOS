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
import Button from '../../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import { Thumbnail } from 'react-native-thumbnail-video';

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

class Catalog extends React.Component {
    render() {
        this.getVideoList();
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} url={item.url} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        );
    }
}

const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZjRhZDFjYWFhZjNjMDhkNzlkZjVhMWM2OTExODUwODEzODY1NmIxZTc5ZTEyMzM1MTcyOTQ0NGU5NDQwZDI0YWZlMTg5NGQzZjJjMzUyIn0.eyJhdWQiOiI2IiwianRpIjoiZWJmNGFkMWNhYWFmM2MwOGQ3OWRmNWExYzY5MTE4NTA4MTM4NjU2YjFlNzllMTIzMzUxNzI5NDQ0ZTk0NDBkMjRhZmUxODk0ZDNmMmMzNTIiLCJpYXQiOjE1ODEwMzY4NTcsIm5iZiI6MTU4MTAzNjg1NywiZXhwIjoxNjEyNjU5MjU3LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.Kvp6Io0vQ5MwMi6ohEHvNoVUrNEBVzTseZQwUdfm6UFWtIm6yuKs5as6uyOKx_1LrcG_-WBBCjiVTEcMtfSYAwsPa8ludXDz0iLxGpf2wJQQzzsVEU9DjModnCoFoYBxVqioHLa9CeGuE_tqEjAvlvT9XxyoU2fn7ndsDLm5wXPoPo2B8DfTwcJZ16l4ZgjOnVQzwW1Km83VWR6LEwZRlUVWUjEaD3WPrptPMLZYHO4mEj_LTP6W0vDAe_xiknjmWz38LPxgDhli1CiySS_Y8hNninWZkRGiUGPRVVEeuPKIeaf2oUT5b3sLybTZo-CFBF1wDNKEUPJ6CVSzaHOfF8aKyMY3NXFkK7sM3vuKgQompDMNjxXbvVEZifsGGEBepyMtGSXVVQaorGU5cVRV06LX2IDfMjLiWrC58BB7OmF6BCcjIaVy9uyM2phil6y8U2eGUZtsYEdCFw3AdL1IKy2ubPDGd-Red5BN_kx7YmqduuE7IByTHH0-Hjg6BoDe2mLPvRPGv7g4_SjQOGdAtYSCW1SpMJ20gFcJRye14PMWlyPkjMmWiBCGRsZeTLKmVXhSEMfbIDqPv5344qYeSPTOtAESeWEiqudkLxqN9gWt1O6P3JkLQ7CoSDGwtdlMTmpL4JjJxUpuWjBwzV145xc11Onl6MzeYzJU9EwVXWI';


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

export default Catalog;

