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
  Image,
  Dimensions
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
//components
import Button from '../../components/Button/Button';
import DefaultButton from '../../components/DefaultButton/DefaultButtom';
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
        <View style={styles.logo}>
          <Image
            style={{ width: 250, height: 170, marginBottom: '10%' }}
            source={require('../../assets/image/logo.png')}
          />
        </View>
        <View style={styles.textContiner}>
          <Text style={{ color: appColor.gray, textAlign: 'center', fontSize: 15 }}>{appText.homeText}</Text>
        </View>
        <View style={styles.btn_set}>
          <View style={styles.log_btn}>
            <DefaultButton
              onPress={() => this.proceedLogin()}
              name={"LOGIN"}
            />
          </View>
          <View style={styles.reg_btn}>
            <DefaultButton
              onPress={() => this.proceedReg()}
              name={"SIGNUP"}
            />
          </View>
        </View>
        {/* <Image
          style={{ width: '60%', height: (screenHeight*0.4), marginBottom: '10%'}}
          source={require('../../assets/image/logo.png')}
        />
        <View style={styles.textContiner}>
          <Text style={{ color: appColor.gray, textAlign: 'center',fontSize:15 }}>{appText.homeText}</Text>
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
        </View> */}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColor.white
  },
  log_btn: {
    marginTop: '10%',
  },
  reg_btn: {
    marginTop: '5%'
  },
  btn_set: {
    height: '40%',
    width: '80%',
    marginTop: '15%'
  },
  textContiner: {
    width: '70%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default Home;
