import {View, Text} from 'react-native';
import React from 'react';
import useStore from '../store/useStore';

export default function HomeScreen() {
  const accessToken: any = useStore((state: any) => state.accessToken);

  return (
    <View>
      <Text>{accessToken}</Text>
    </View>
  );
}
