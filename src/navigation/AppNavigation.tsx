import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';
import TasksScreen from '../screens/TasksScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ReportScreen from '../screens/ReportScreen';
import NotificationScreen from '../screens/NotificationScreen';
export type RootStackParams = {
  Splash: any;
  Home: any;
  Login: any;
  BottomTab: any;
  Tasks: any;
  Schedule: any;
  Report: any;
  Notification: any;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="BottomTab"
          options={{headerShown: false}}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Tasks"
          options={{headerShown: false}}
          component={TasksScreen}
        />
        <Stack.Screen
          name="Schedule"
          options={{headerShown: false}}
          component={ScheduleScreen}
        />
        <Stack.Screen
          name="Report"
          options={{headerShown: false}}
          component={ReportScreen}
        />
        <Stack.Screen
          name="Notification"
          options={{headerShown: false}}
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
