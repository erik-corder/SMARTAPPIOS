import React, { Component, PureComponent } from 'react';
import {
  View, Image, StyleSheet, ImageBackground,Text
} from 'react-native';

import { createAppContainer, createBottomTabNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

//screens
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import LoginHome from '../screens/LoginHome/LoginHome';
import videoCatergory from '../screens/videoCatergory/videoCatergory';
import videoList from '../screens/videoList/videoList';
import Favorites from '../screens/Favorites/Favorites';
import Catalog from '../screens/Catalog/Catalog';
import Profile from '../screens/Profile/Profile';
import RegistrationFirst from '../screens/Registration/RegistrationFirst/RegistrationFirst';
import RegistrationSecond from '../screens/Registration/RegistrationsSecond/RegistrationSecond';
import RCPmanual from '../screens/RCPmanual/RCPmanual';
import Catalogs from '../screens/Catalogs/Catalogs';
import SingleCatalog from '../screens/SingleCatalog/SingleCatalog';

import Color from '../src/utils/AppColor';

const DrawerContent = (data) => (
  <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
      </View>
  </SafeAreaView>
);

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    LoginHome: { screen: LoginHome },
    videoCatergory: { screen: videoCatergory },
    videoList: { screen: videoList },
    Favorites: { screen: Favorites },
    Catalog: { screen: Catalog },
    Profile: { screen: Profile },
    RegistrationFirst: { screen: RegistrationFirst },
    RegistrationSecond: { screen: RegistrationSecond },
    RCPmanual: {screen : RCPmanual},
    Catalogs: {screen: Catalogs},
    SingleCatalog: {screen: SingleCatalog},
  }, {
    drawerWidth: 250,
    navigationOptions: null,
    headerMode: 'none',
    contentOptions: {
      style: {
      },
      labelStyle: {
        color: Color.white,
        // fontFamily: Font.regular,
        width: '100%',
        paddingLeft: 50,
        fontSize: 18,
        fontWeight: '100',
      },
    },
  
    contentComponent: DrawerContent,
  }
);

const styles = StyleSheet.create({
  header: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  }
});




export default createAppContainer(AppNavigation);
// export default createAppContainer(TabNavigator);