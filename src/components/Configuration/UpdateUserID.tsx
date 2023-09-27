import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useRookConfiguration } from 'react-native-rook-sdk-apple-health';
import { Alert } from 'react-native';

export const UpdateUserIDConfig = () => {
  const [currentUserID, setCurrentUserID] = useState('User id');

  const { Fonts, Gutters, Common } = useTheme();

  const { ready, updateUserID, clearUserID, getUserID, syncUserTimezone } =
    useRookConfiguration();

  useEffect(() => {
    if (ready) {
      getUserID().then(setCurrentUserID).catch(console.log);
    }
  }, [ready]);

  const handleUpdateUserId = async (): Promise<void> => {
    try {
      await updateUserID(currentUserID);
      console.log(currentUserID);

      Alert.alert('User updated', '', [{ text: 'OK' }]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearUser = async (): Promise<void> => {
    try {
      await clearUserID();
      setCurrentUserID('');

      Alert.alert('User cleared', '', [{ text: 'OK' }]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTimezone = async (): Promise<void> => {
    try {
      await syncUserTimezone();

      Alert.alert('Timezone Updated', '', [{ text: 'OK' }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    ready && (
      <View>
        <View style={Gutters.tinyHMargin}>
          <Text style={[Fonts.titleSmall, Fonts.textCenter]}>
            Configure your user id
          </Text>
          <Text style={[Fonts.textSmall, Fonts.textWhite]}>
            Current User ID:
          </Text>
          <TextInput
            style={[Fonts.textSmall, Fonts.textWhite, Common.input.base]}
            value={currentUserID}
            onChangeText={text => setCurrentUserID(text)}
            placeholder="Ingrese el UserID"
          />
        </View>
        <TouchableWithoutFeedback onPress={handleUpdateUserId}>
          <View style={Common.button.rounded}>
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textCenter,
                Fonts.textWhite,
                Fonts.textBold,
              ]}
            >
              Actualizar UserID
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClearUser}>
          <View style={Common.button.rounded}>
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textCenter,
                Fonts.textWhite,
                Fonts.textBold,
              ]}
            >
              Clear UserID
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleTimezone}>
          <View style={Common.button.rounded}>
            <Text
              style={[
                Fonts.textSmall,
                Fonts.textCenter,
                Fonts.textWhite,
                Fonts.textBold,
              ]}
            >
              Sync timezone
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  );
};
