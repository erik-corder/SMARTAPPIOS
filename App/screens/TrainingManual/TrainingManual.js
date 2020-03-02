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

class TrainingManual extends React.Component {

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
                <NavBarDefault name={'Training Manuals'} onPress={() => this.proceedBack()}/>
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
                    <TouchableOpacity style={styles.tabItem} onPress={() => { this.props.navigation.navigate('FavoriteManual') }}>
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


export default TrainingManual;