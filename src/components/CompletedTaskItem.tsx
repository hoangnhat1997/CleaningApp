import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {AppImgSrcs} from '../themes';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CompletedTaskItem = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Image style={styles.img} source={AppImgSrcs.floor_img} />
      </View>
      <View style={styles.viewLable}>
        <Text style={styles.textLable}>Floor Cleaning</Text>
        <Text style={styles.textSubLable}>Main Lobby</Text>
      </View>
    </View>
  );
};
export default CompletedTaskItem;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 0.9 * windowWidth,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  },
  img: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  viewLable: {
    marginLeft: 20,
  },
  textLable: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
  },
  textSubLable: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
});
