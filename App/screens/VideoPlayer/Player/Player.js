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
import Video from 'react-native-video';

const sampleVideo = require('../../../assets/sample.mp4')

//components
// import Button from '../../components/Button/Button';
// import appText from '../../src/utils/AppText';
// import appColor from '../../src/utils/AppColor';
// import appLogo from '../../src/utils/Assets';
// import axios from "axios";


class Player extends React.Component {

  state = {
    onCall : true
  }


  render() {
    return (
      <View style={styles.container}>
          <Video 
            source={require('../../../assets/sample.mp4')}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}

export default Player;
