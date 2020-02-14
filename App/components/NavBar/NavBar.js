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

//components
import appColor from '../../src/utils/AppColor';



class NavBar extends React.Component {


  render() {
    return (
      <View style={styles.navbar}>
        <Image
          style={{ width: 50, height: 50, marginBottom: 20, textAlign: 'center' }}
          source={require('../../assets/image/logo3.png')}
        />
      </View>
    );
  }
}

const styles = {
    navbar: {
        height: 55,
        backgroundColor: appColor.white,
        elevation: 3,
        alignItems: 'center',
  }
}

export default NavBar;
