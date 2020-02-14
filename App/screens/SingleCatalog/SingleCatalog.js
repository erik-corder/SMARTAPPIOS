import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


class SingleCatalog extends React.Component {
  render() {

    let data = [{
      value: 'Software',
    }, {
      value: 'Teaching',
    }, {
      value: 'Soldure',
    }];

    return (
      <SafeAreaView>
        <ScrollView >
          <View >
            <Image source={require('../../assets/image/doc.jpg')} style={{ width: '100%' }}></Image>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ textAlign: 'left', color: "blue" }}>Product</Text>
              <Text style={{ textAlign: 'left', fontSize: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ textAlign: 'left', fontSize: 25 }}>Document Sub Heading</Text>
                <Text style={{ textAlign: 'left', fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
              </View>
            </View>
          </View>
        </ScrollView >
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}


export default SingleCatalog;