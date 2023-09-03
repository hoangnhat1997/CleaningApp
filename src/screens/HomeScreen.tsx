import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import useStore from '../store/useStore';
import {AppIcons} from '../themes';
import CompletedTaskItem from '../components/CompletedTaskItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const accessToken: any = useStore((state: any) => state.accessToken);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.viewAvatar}>
          {AppIcons.Icons({size: 24, name: 'notification_bell'})}
          <View style={styles.viewName}>
            <Text style={styles.textName}>{'Hello,'}</Text>
            <Text style={styles.textName}>{'Nhat'}</Text>
          </View>
        </View>
        {AppIcons.Icons({size: 24, name: 'notification_bell'})}
      </View>
      <View style={styles.viewTask}>
        <Text style={styles.textTask}>Completed Tasks per Week</Text>
        <Text style={styles.textNumber}>34</Text>
      </View>
      <View style={styles.viewTask}>
        <Text style={styles.textTask}>Working Hours per week</Text>
        <Text style={styles.textNumber}>46 hours</Text>
      </View>
      <View style={styles.viewTaskList}>
        <View style={styles.viewSubTitle}>
          <Text style={styles.textSubLeft}>Completed Tasks</Text>
          <View style={styles.viewSubRight}>
            <Text style={styles.textSubRight}>View All</Text>
            {AppIcons.Icons({size: 16, name: 'right_arrow'})}
          </View>
        </View>
        <Text style={styles.textDay}>Today</Text>
        <View style={styles.viewTasks}>
          <CompletedTaskItem />
        </View>
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
  viewAvatar: {
    flexDirection: 'row',
  },
  viewName: {
    textAlign: 'left',
    marginLeft: 10,
  },
  textName: {
    color: '#fff',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  viewTask: {
    height: 100,
    width: 0.6 * windowWidth,
    backgroundColor: '#393939',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  textTask: {
    color: '#fff',
    fontSize: 12,
  },
  textNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewTaskList: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewSubTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  viewSubRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSubLeft: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSubRight: {
    fontSize: 14,
    marginRight: 5,
  },
  textDay: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  viewTasks: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
});
