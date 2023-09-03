import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CompletedTaskItem = () => {
  return <View style={styles.container}></View>;
};
export default CompletedTaskItem;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 0.9 * windowWidth,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  },
});
