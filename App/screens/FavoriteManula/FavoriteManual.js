import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { SearchBar } from 'react-native-elements';

//component
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';
import TabBar from '../../components/TabBar/TabBar';
import appColor from '../../src/utils/AppColor';

class FavoriteManual extends React.Component {

    constructor() {
        super();
        this.state = {
            TrainingManulaData: [],
            Loading: true
        }
    }

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('RCPmanual');
    }

    componentDidMount() {
        this._getTrainingManulas();
    }

    _getTrainingManulas() {
        const { params } = this.props.navigation.state;
        this.setState({
            TrainingManulaData: params,
            Loading: false
        });
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        const { search, TrainingManulaData, Loading } = this.state;
        if (Loading === false) {
            console.log(TrainingManulaData);
        }
        return (
            <>
                <NavBarDefault name={'Favorite Manuals'} onPress={() => this.proceedBack()}/>
                <SearchBar
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    inputContainerStyle={{ backgroundColor: appColor.white, width: '90%', borderColor: appColor.white }}
                    containerStyle={{ backgroundColor: appColor.white, borderWidth: 0, borderColor: appColor.balck, borderTopWidth: 0, height: 50 }}
                    value={search}
                />
                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.catolog}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SingleCatalog') }}>
                                <View >
                                    <Image source={require('../../assets/image/doc.jpg')} style={styles.catologThumbnail}></Image>
                                    <Text style={{ fontSize: 17 }}>
                                        Document 01
                                </Text>
                                    <Text style={{ fontSize: 12, color: "blue" }}>
                                        Product
                                </Text>
                                    <Text style={{ fontSize: 12, color: "#626262" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView >
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}  onPress={() => { this.props.navigation.navigate('LoginHome') }}>
                        <Image source={require('../../assets/image/home_s.png')} style={{ width: 40, height: 40 }}></Image>
                        <Text style={{ fontSize: 11 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('Favorite_Manual') }}>
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
            </>
        );
    }
}

const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZjRhZDFjYWFhZjNjMDhkNzlkZjVhMWM2OTExODUwODEzODY1NmIxZTc5ZTEyMzM1MTcyOTQ0NGU5NDQwZDI0YWZlMTg5NGQzZjJjMzUyIn0.eyJhdWQiOiI2IiwianRpIjoiZWJmNGFkMWNhYWFmM2MwOGQ3OWRmNWExYzY5MTE4NTA4MTM4NjU2YjFlNzllMTIzMzUxNzI5NDQ0ZTk0NDBkMjRhZmUxODk0ZDNmMmMzNTIiLCJpYXQiOjE1ODEwMzY4NTcsIm5iZiI6MTU4MTAzNjg1NywiZXhwIjoxNjEyNjU5MjU3LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.Kvp6Io0vQ5MwMi6ohEHvNoVUrNEBVzTseZQwUdfm6UFWtIm6yuKs5as6uyOKx_1LrcG_-WBBCjiVTEcMtfSYAwsPa8ludXDz0iLxGpf2wJQQzzsVEU9DjModnCoFoYBxVqioHLa9CeGuE_tqEjAvlvT9XxyoU2fn7ndsDLm5wXPoPo2B8DfTwcJZ16l4ZgjOnVQzwW1Km83VWR6LEwZRlUVWUjEaD3WPrptPMLZYHO4mEj_LTP6W0vDAe_xiknjmWz38LPxgDhli1CiySS_Y8hNninWZkRGiUGPRVVEeuPKIeaf2oUT5b3sLybTZo-CFBF1wDNKEUPJ6CVSzaHOfF8aKyMY3NXFkK7sM3vuKgQompDMNjxXbvVEZifsGGEBepyMtGSXVVQaorGU5cVRV06LX2IDfMjLiWrC58BB7OmF6BCcjIaVy9uyM2phil6y8U2eGUZtsYEdCFw3AdL1IKy2ubPDGd-Red5BN_kx7YmqduuE7IByTHH0-Hjg6BoDe2mLPvRPGv7g4_SjQOGdAtYSCW1SpMJ20gFcJRye14PMWlyPkjMmWiBCGRsZeTLKmVXhSEMfbIDqPv5344qYeSPTOtAESeWEiqudkLxqN9gWt1O6P3JkLQ7CoSDGwtdlMTmpL4JjJxUpuWjBwzV145xc11Onl6MzeYzJU9EwVXWI';

const styles = {
    container: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    catolog: {
        marginLeft: 20,
        marginTop: 20,
        width: '40%',
        flexDirection: "column"
    },
    catologThumbnail: {
        width: '100%',
        height: 100,
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


export default FavoriteManual;