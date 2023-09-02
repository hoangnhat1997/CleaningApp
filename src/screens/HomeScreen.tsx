import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import useStore from '../store/useStore';
import {AppIcons} from '../themes';

const HomeScreen = () => {
  const accessToken: any = useStore((state: any) => state.accessToken);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Text>Hello, Nhat</Text>
        {AppIcons.Icons({size: 24, name: 'notification_bell'})}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
