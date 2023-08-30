import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppIcons, AppImgSrcs} from '../themes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={AppImgSrcs.splash_img} />
      <View style={styles.viewText}>
        <Text style={styles.text}>Unlock the Potential of Your Skills</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <Text style={styles.textButton}>{'Start'}</Text>
        {AppIcons.Icons({size: 24, name: 'right_arrow'})}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: 0.9 * windowWidth,
    height: 0.5 * windowHeight,
    marginTop: 60,
    alignSelf: 'center',
  },
  viewText: {
    marginTop: 40,
    marginLeft: 30,
    width: 0.6 * windowWidth,
    height: 0.2 * windowHeight,
  },
  text: {
    fontSize: 32,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#9de86f',
    height: 66,
    width: 0.9 * windowWidth,
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 25,
    marginRight: 10,
  },
});
