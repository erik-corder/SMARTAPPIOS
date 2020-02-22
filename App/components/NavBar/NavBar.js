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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//components
import appColor from '../../src/utils/AppColor';



class NavBar extends React.Component {


  render() {
    return (
      <View style={styles.navbar}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{width:'15%', justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="bars" size={30} />
          </View>
          <View style={{ alignItems: 'center', width: '75%'}}>
            <Image
              style={{ width: '25%', height: '90%', marginBottom: 20, textAlign: 'center' }}
              source={require('../../assets/image/logo3.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  navbar: {
    height: 60,
    backgroundColor: appColor.white,
    elevation: 3,
    width: '100%',
    justifyContent: 'center',
  }
}

export default NavBar;
