import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  CheckBox,
  TouchableOpacity,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import NavBar from '../../components/NavBar/NavBar';
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';
import appColor from '../../src/utils/AppColor';


class Profile extends React.Component {
  render() {

    let data = [{
      value: 'Software',
    }, {
      value: 'Teaching',
    }, {
      value: 'Soldure',
    }];

    return (
      <>
        <NavBarDefault name={'Profile'} />
        <View style={styles.container}>
          <View>
            <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: 'bold' }}>Jhone Conner</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              required
            />
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Orgarnization"
            />
            <Dropdown
              label='Industry'
              data={data}
            />
          </View>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Image source={require('../../assets/image/home_s.png')} style={{ width: 40, height: 40 }}></Image>
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
            <Image source={require('../../assets/image/profile_n.png')} style={{ width: 40, height: 40 }}></Image>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputTitle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 50,
    marginRight: 10,
    marginTop: 10,

  },
  textInputFirstName: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginTop: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 260,
    marginTop: 10
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


export default Profile;