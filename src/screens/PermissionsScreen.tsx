import React from 'react';
import { useTheme } from '@/hooks';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookPermissions } from 'react-native-rook-sdk-apple-health';

export const PermissionsScreen = () => {
  const { Common, Fonts } = useTheme();

  const {
    ready,
    requestAllPermissions,
    requestSleepPermissions,
    requestPhysicalPermissions,
    requestBodyPermissions,
  } = useRookPermissions();

  const handleRequestAllPermissions = async (): Promise<void> => {
    try {
      const result = await requestAllPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestSleepPermissions = async (): Promise<void> => {
    try {
      const result = await requestSleepPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestPhysicalPermissions = async (): Promise<void> => {
    try {
      const result = await requestPhysicalPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestBodyPermissions = async (): Promise<void> => {
    try {
      const result = await requestBodyPermissions();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return ready ? (
    <View>
      <TouchableWithoutFeedback onPress={handleRequestSleepPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request sleep Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestPhysicalPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Physical Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestBodyPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Body Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleRequestAllPermissions}>
        <View style={Common.button.rounded}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Request Permissions
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  ) : (
    <Text>Loading . . .</Text>
  );
};
