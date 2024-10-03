import React from 'react';
import { useTheme } from '@/hooks';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookPermissions } from 'react-native-rook-sdk-apple-health';
import { useRookBackGround } from 'react-native-rook-sdk-apple-health';

export const PermissionsScreen = () => {
  const { Common, Fonts } = useTheme();
  const { enableBackgroundForEvents, enableBackgroundForSummaries } =
    useRookBackGround();
  const {
    ready,
    requestAllPermissions,
    requestSleepPermissions,
    requestPhysicalPermissions,
    requestBodyPermissions,
  } = useRookPermissions();

  const enableBackgroundSync = async (): Promise<void> => {
    try {
      await enableBackgroundForEvents();
      await enableBackgroundForSummaries();
      console.log('enabled');
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleRequestAllPermissions = async (): Promise<void> => {
    try {
      const result = await requestAllPermissions();
      console.log(result);

      await enableBackgroundSync();
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleRequestSleepPermissions = async (): Promise<void> => {
    try {
      const result = await requestSleepPermissions();
      console.log(result);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleRequestPhysicalPermissions = async (): Promise<void> => {
    try {
      const result = await requestPhysicalPermissions();
      console.log(result);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handleRequestBodyPermissions = async (): Promise<void> => {
    try {
      const result = await requestBodyPermissions();
      console.log(result);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
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
