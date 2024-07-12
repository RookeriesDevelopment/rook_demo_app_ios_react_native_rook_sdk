import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { ApplicationStackParamList } from '../../@types/navigation';
import { RookSyncGate } from 'react-native-rook-sdk-apple-health';
import { credentials } from '@/utils/config';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  return (
    <RookSyncGate
      environment="sandbox"
      clientUUID={credentials.uuid}
      password={credentials.password}
      enableBackgroundSync
      enableLogs={__DEV__}
    >
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </RookSyncGate>
  );
};

export default ApplicationNavigator;
