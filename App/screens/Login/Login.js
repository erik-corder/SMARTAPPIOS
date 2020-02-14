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
  ActivityIndicator
} from 'react-native';

//components
import Button from '.././../components/Button/Button';
import appText from '../../src/utils/AppText';
import AppColor from '../../src/utils/AppColor';
import AppText from '../../src/utils/AppText';

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
    };
  }

  componentDidMount = () => { }
  componentWillUnmount = () => { }

  proceedLoginHome = () => {
    // this.props.navigation.goBack(null);
    // this.props.navigation.navigate('LoginHome');
    if (!this.ValidateEmail(this.state.email)) {
      this.setState({
        emailError: true,
        passwordError: false,
        error: AppText.name_error
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
        this._storeData(result.data.login);
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
    const payload = { email, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = error => {
        // this.props.navigation.goBack(null);
        // this.props.navigation.navigate('LoginHome');
      console.log(error && error.response);
      // this.setState({errors: error.response.data, isLoading: false});
    };

    APIKit.post('http://apidev.rcpanz.com.au/api/customer/login', payload)
      .then(onSuccess)
      .catch(onFailure);

    return result;
  }

  // set local storage to data
  _storeData = async (obj) => {
    try {
      // save login data and token local storage
      await AsyncStorage.setItem('status', 'login');
      await AsyncStorage.setItem('jwtToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZjRhZDFjYWFhZjNjMDhkNzlkZjVhMWM2OTExODUwODEzODY1NmIxZTc5ZTEyMzM1MTcyOTQ0NGU5NDQwZDI0YWZlMTg5NGQzZjJjMzUyIn0.eyJhdWQiOiI2IiwianRpIjoiZWJmNGFkMWNhYWFmM2MwOGQ3OWRmNWExYzY5MTE4NTA4MTM4NjU2YjFlNzllMTIzMzUxNzI5NDQ0ZTk0NDBkMjRhZmUxODk0ZDNmMmMzNTIiLCJpYXQiOjE1ODEwMzY4NTcsIm5iZiI6MTU4MTAzNjg1NywiZXhwIjoxNjEyNjU5MjU3LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.Kvp6Io0vQ5MwMi6ohEHvNoVUrNEBVzTseZQwUdfm6UFWtIm6yuKs5as6uyOKx_1LrcG_-WBBCjiVTEcMtfSYAwsPa8ludXDz0iLxGpf2wJQQzzsVEU9DjModnCoFoYBxVqioHLa9CeGuE_tqEjAvlvT9XxyoU2fn7ndsDLm5wXPoPo2B8DfTwcJZ16l4ZgjOnVQzwW1Km83VWR6LEwZRlUVWUjEaD3WPrptPMLZYHO4mEj_LTP6W0vDAe_xiknjmWz38LPxgDhli1CiySS_Y8hNninWZkRGiUGPRVVEeuPKIeaf2oUT5b3sLybTZo-CFBF1wDNKEUPJ6CVSzaHOfF8aKyMY3NXFkK7sM3vuKgQompDMNjxXbvVEZifsGGEBepyMtGSXVVQaorGU5cVRV06LX2IDfMjLiWrC58BB7OmF6BCcjIaVy9uyM2phil6y8U2eGUZtsYEdCFw3AdL1IKy2ubPDGd-Red5BN_kx7YmqduuE7IByTHH0-Hjg6BoDe2mLPvRPGv7g4_SjQOGdAtYSCW1SpMJ20gFcJRye14PMWlyPkjMmWiBCGRsZeTLKmVXhSEMfbIDqPv5344qYeSPTOtAESeWEiqudkLxqN9gWt1O6P3JkLQ7CoSDGwtdlMTmpL4JjJxUpuWjBwzV145xc11Onl6MzeYzJU9EwVXWI');
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('name', obj.user.firstName);
      this.props.navigation.navigate('Product');
      this.props.setLoginStatus(true)

    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
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
            : <Text style={styles.login_text}>{AppText.login}</Text>}

        </View>
        <Image
          style={{ width: 200, height: 130 }}
          source={require('../../assets/image/logo.png')}
        />
        <View style={styles.smartapp}>
          <Text style={{ color: AppColor.white, fontWeight: 'bold', fontSize: 20 }}>SMART APP</Text>
        </View>
        <TextInput
          style={styles.textStyle}
          placeholder="  Email"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.textStyle}
          secureTextEntry
          placeholder="  Password"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <View style={styles.reg_btn}>
          <Button
            onPress={() => this.proceedLoginHome()}
            name={"LOGIN"}
          />
        </View>
        <Text style={{ color: AppColor.red, marginTop: 10 }}>
          Forget Password?
        </Text>
        <Text style={{ color: AppColor.gray, marginTop: 10 }}>
          Don't have an account?
        </Text>
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
    marginTop: 10,
  },
  reg_btn: {
    marginTop: 10
  },
  textContiner: {
    width: 250,
  },
  textStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    width: 250,
    marginTop: 10,
    borderBottomWidth: 2,
  },
  smartapp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 30,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: AppColor.balck
  }
}

export default Login;
