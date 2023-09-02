import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ReportScreen from '../screens/ReportScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.3,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
