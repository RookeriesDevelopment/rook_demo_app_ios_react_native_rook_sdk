import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  EventsScreen,
  HomeScreen,
  PermissionsScreen,
  SyncSummariesScreen,
} from '@/screens';
import { ConfigurationScreen } from '@/screens/ConfigurationScreen';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Permissions" component={PermissionsScreen} />
      <Stack.Screen name="Summaries" component={SyncSummariesScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Configuration" component={ConfigurationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
