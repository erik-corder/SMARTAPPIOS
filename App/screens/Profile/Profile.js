import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  CheckBox
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


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
      <View style={styles.container}>
        <View>
          <Text style={{marginBottom:20, fontSize:30, fontWeight: 'bold'}}>Jhone Conner</Text>
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
  }
}


export default Profile;