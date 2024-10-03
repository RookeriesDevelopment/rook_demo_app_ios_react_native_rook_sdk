/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRookConfiguration } from 'react-native-rook-sdk-apple-health';

export const ConfigurationScreen = () => {
  const [userId, setUserId] = useState('User id');

  const {
    getUserID,
    updateUserID,
    clearUserID,
    syncUserTimezone,
    enableSyncYesterday,
    disableSyncYesterday,
  } = useRookConfiguration();

  const handleUpdateUserId = async (): Promise<void> => {
    try {
      await updateUserID(userId);
      Alert.alert('Success', 'User updated', [{ text: 'OK' }]);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleGetUserId = async (): Promise<void> => {
    try {
      const result = await getUserID();
      setUserId(result);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleClearUserId = async (): Promise<void> => {
    try {
      await clearUserID();
      Alert.alert('Success', 'User Cleared', [{ text: 'OK' }]);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleTimezone = async (): Promise<void> => {
    try {
      await syncUserTimezone();
      Alert.alert('Success', 'timezone synced', [{ text: 'OK' }]);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleEnable = async (): Promise<void> => {
    try {
      await enableSyncYesterday();
      Alert.alert('Success', 'Sync Yesterday enabled', [{ text: 'OK' }]);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleDisable = async (): Promise<void> => {
    try {
      await disableSyncYesterday();
      Alert.alert('Success', 'Sync Yesterday disabled', [{ text: 'OK' }]);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  return (
    <View>
      <Text style={{ color: 'white' }}>User ID:</Text>
      <TextInput
        style={{ color: 'white' }}
        value={userId}
        onChangeText={text => setUserId(text)}
        placeholder="Ingrese el UserID"
      />
      <Button title="Actualizar UserID" onPress={handleUpdateUserId} />
      <Button title="Obtener UserID" onPress={handleGetUserId} />
      <Button title="Clear UserID" onPress={handleClearUserId} />
      <Button title="Sync Timezone" onPress={handleTimezone} />
      <Button title="Enable Sync yesterday" onPress={handleEnable} />
      <Button title="Disable Sync yesterday" onPress={handleDisable} />
    </View>
  );
};
