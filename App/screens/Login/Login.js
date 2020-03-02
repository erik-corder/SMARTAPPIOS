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
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import axios from 'axios';

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import AppColor from '../../src/utils/AppColor';
import AppText from '../../src/utils/AppText';
import NavBarDefault from '../../components/NavBarDefault/NavBarDefault';
import UnderLineRed from '../../components/UnderLineRed/UnderLineRed';

import APIKit from './LoginAPIkit';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      isVisible: false,
      spinner: false,
      modelMsg: '',
      result: ''
    };
  }

  componentDidMount = () => { }
  componentWillUnmount = () => { }

  proceedBack(){
    this.props.navigation.goBack(null);
    this.props.navigation.navigate('Home');
  }

  proceedLoginHome = () => {
    // this.props.navigation.goBack(null);
    // this.props.navigation.navigate('LoginHome');
    if (!this.ValidateEmail(this.state.email)) {
      this.setState({
        emailError: true,
        passwordError: false,
        error: AppText.email_error
      });
    } else if (this.state.password == '') {
      this.setState({
        emailError: false,
        passwordError: true,
        error: AppText.password_required
      });
    } else {
      this.requestToLogin().then((result) => {
        this.setAnimation(false);
        // this._storeData(result.data.login);
      })
        .catch((error) => {
          this.setAnimation(false);
          this.showHideAlert(true, AppText.common_error);
        });
    }
  }

  // enable or disable animation
  setAnimation = (status) => {
    this.setState({
      spinner: status,
    });
  }

  // handle alert
  showHideAlert = (status, msg) => {
    this.setState({
      modelMsg: msg,
      isVisible: status,
    });
  }

  // check valid email or not
  ValidateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  requestToLogin = async () => {
    this.setAnimation(true);
    const { email, password } = this.state;
    var result;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post('https://apidev.rcpanz.com.au/api/customer/login', {
      email: email,
      password: password
    })
      .then(response => {
        this.setState({ result: response.data });
        this._storeData(this.state.result); 
        if (response.data.error == null) {     
          this.props.navigation.goBack(null);
          this.props.navigation.navigate('LoginHome');
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
    return result;
  }

  // set local storage to data
  _storeData = async (obj) => {
    console.log( obj.result.access_token);
    try {
      // save login data and token local storage
      await AsyncStorage.setItem('status', 'login');
      await AsyncStorage.setItem('jwtToken', obj.result.access_token);
      await AsyncStorage.setItem('email', obj.result.email);
      await AsyncStorage.setItem('name', obj.result.firstName);
    } catch (error) {
      console.log('error');
      
    }
  };

  render() {
    const { result } = this.state;
    return (
      <>
        <NavBarDefault name={'Login'}   onPress={() => this.proceedBack()}/>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.login_text_bg}>
              {this.state.spinner == true
                ? (
                  <ActivityIndicator
                    style={{ height: 200 }}
                    color={AppColor.rose}
                    size="large"
                  />
                )
                : <Text style={styles.login_text}></Text>}

            </View>
            <View style={styles.logo}>
              <Image
                style={{ width: 250, height: 170, marginBottom: '10%' }}
                source={require('../../assets/image/logo.png')}
              />
            </View>
            <View style={styles.text_fild_set}>
              <TextInput
                style={styles.textStyle}
                placeholder="  Email"
                placeholderTextColor="#000"
                onChangeText={(text) => this.setState({ email: text })}
              />
              {this.state.emailError == true
                ? (
                  <View style={styles.lineBackground}>
                    <UnderLineRed />
                    <Text style={styles.errorText}>{this.state.error}</Text>
                  </View>
                )
                : (
                  <View style={styles.lineBackground}>
                    {/* <UnderLine /> */}
                  </View>
                )}

              <TextInput
                style={styles.textStyle}
                secureTextEntry
                placeholder="  Password"
                placeholderTextColor="#000"
                onChangeText={(text) => this.setState({ password: text })}
              />
              {this.state.passwordError == true
                ? (
                  <View style={styles.lineBackground}>
                    <UnderLineRed />
                    <Text style={styles.errorText}>{this.state.error}</Text>
                  </View>
                )
                : (
                  <View style={styles.lineBackground}>
                    {/* <UnderLine /> */}
                  </View>
                )}
            </View>
            <>
              {result.error != null
                ? (
                  <View style={styles.line_error}>
                    <Text style={styles.errorText}>this email not registered or invalid password (You mus enter 6 character for password)</Text>
                  </View>
                )
                : (
                  <View style={styles.line_error}>
                    {/* <UnderLine /> */}
                  </View>
                )}
            </>
            <View style={styles.log_btn}>
              <Button
                onPress={() => this.proceedLoginHome()}
                name={"LOGIN"}
              />
            </View>
            <Text style={{ color: AppColor.red, marginTop: 10 }}>
              Forget Password?
              </Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegistrationFirst') }}>
              <View style={{ marginBottom: '40%', alignItems: 'center' }}>
                <Text style={{ color: AppColor.gray, marginTop: 20 }} >
                  Don't have an account?
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
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
    width: '80%',
  },
  textStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    width: '100%',
    marginTop: 10,
    borderBottomWidth: 2,
  },
  text_fild_set: {
    width: '80%',
    marginTop: '10%'
  },
  errorText: {
    fontSize: 14,
    color: '#FF0000',
    width: '80%'
  },
  line_error: {
    width: '90%'
  },
  logo: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default Login;
