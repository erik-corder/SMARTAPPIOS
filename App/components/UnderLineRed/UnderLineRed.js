import React from 'react';
import { View, StyleSheet } from 'react-native';

const UnderLineRed = () => (
  <View style={styles.line_content} />
);

const styles = StyleSheet.create({
  line_content: {
    borderBottomColor: '#FF0000',
    borderBottomWidth: 1,
    width: '90%',
  }
});
export default UnderLineRed;
