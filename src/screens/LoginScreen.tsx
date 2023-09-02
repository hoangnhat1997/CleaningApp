import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppIcons, AppImgSrcs} from '../themes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigation';
import {Login} from '../apis/Api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {}, []);

  const loginRequest = async () => {
    try {
      const res = await Login({
        username: username,
        password: password,
      });
      navigation.navigate('BottomTab');
      console.log(res);
    } catch (error) {
      Alert.alert('Error during the login process');
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewBanner}>
          <Image style={styles.banner} source={AppImgSrcs.login_img} />
          <View style={styles.overlay} />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.textInput}>{'Username'}</Text>
          <TextInput
            style={styles.inputUserName}
            onChangeText={setUsername}
            placeholder="Enter Username"
          />
          <Text style={styles.textInput}>{'Password'}</Text>
          <View>
            <TextInput
              style={styles.inputPassword}
              onChangeText={setPassword}
              placeholder="Enter Password"
              secureTextEntry={showPassword ? true : false}
            />
            <TouchableOpacity
              style={styles.subPassword}
              onPress={() => setShowPassword(!showPassword)}>
              {AppIcons.Icons({size: 24, name: 'eye'})}
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.textForgotPassword}>{'Forgot password'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => loginRequest()}
            style={styles.button}>
            <Text style={styles.textButton}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.space}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 59,
    backgroundColor: 'white',
  },
  viewBanner: {
    flex: 55,
  },
  banner: {
    width: 0.9 * windowWidth,
    height: 0.5 * windowHeight,
    marginTop: 60,
    alignSelf: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  viewInput: {
    flex: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  inputUserName: {
    height: 50,
    width: 350,
    alignSelf: 'center',
    borderColor: '#9EE86F',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  inputPassword: {
    height: 50,
    width: 350,
    alignSelf: 'center',
    borderColor: '#9EE86F',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  subPassword: {
    position: 'absolute',
    right: 20,
    bottom: 14,
  },

  textForgotPassword: {
    marginTop: 20,
    marginBottom: 10,
    color: '#9de86f',
  },
  viewButton: {
    flex: 4,
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
  },
  space: {
    flex: 13,
  },
});
