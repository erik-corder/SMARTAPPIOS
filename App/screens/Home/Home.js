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
import Button from '../../components/Button/Button';
import appText from '../../src/utils/AppText';
import appColor from '../../src/utils/AppColor';
import appLogo from '../../src/utils/Assets';
import axios from "axios";


class Home extends React.Component {

  state = {
    onCall: true
  }

  proceedLogin = () => {
    this.props.navigation.goBack(null);
    this.props.navigation.navigate('Login');
  }

  proceedReg = () => {
    this.props.navigation.goBack(null);
    this.props.navigation.navigate('RegistrationFirst');
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '55%', height: '22%', marginBottom: '10%'}}
          source={require('../../assets/image/logo.png')}
        />
        <View style={styles.textContiner}>
          <Text style={{ color: appColor.gray, textAlign: 'center', }}>{appText.homeText}</Text>
        </View>
        <View style={styles.btn_set}>
          <View style={styles.log_btn}>
            <Button
              onPress={() => this.proceedLogin()}
              name={"LOGIN"}
            />
          </View>
          <View style={styles.reg_btn}>
            <Button
              onPress={() => this.proceedReg()}
              name={"SIGNUP"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  log_btn: {
    marginTop: '10%',
  },
  reg_btn: {
    marginTop: '5%'
  },
  btn_set: {
    width: '80%'
  },
  textContiner: {
    width: '70%',
    height: '20%'
  }
}

export default Home;
