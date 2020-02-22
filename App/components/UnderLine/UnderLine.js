import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppColor from '../../src/utils/AppColor';

const UnderLine = () => (
  <View style={styles.line_content} />
);

const styles = StyleSheet.create({
  line_content: {
    borderBottomColor: AppColor.balck,
    borderBottomWidth: 1,
    width: '90%',
  }
});
export default UnderLine;
