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
  Text
} from 'react-native';

//Navigation
import AppNavigation from './App/navigation/AppNavigation';

class App extends React.Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}

export default App;
