import React from 'react';
import { useTheme } from '@/hooks';
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookDataSources } from 'react-native-rook-sdk-apple-health';

export const DataSourcesScreen = () => {
  const { Common, Fonts } = useTheme();

  const { getAvailableDataSources, presentDataSourceView } =
    useRookDataSources();

  const handleSources = async () => {
    try {
      console.log('loading . . .');
      const r = await getAvailableDataSources({
        redirectURL: 'https://example.com',
      });
      Alert.alert('Notice', 'The response was printed in the console', [
        { text: 'OK', onPress: () => {} },
      ]);
      console.log(r);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  const handlePresent = async () => {
    try {
      console.log('loading . . .');
      const r = await presentDataSourceView({
        redirectURL: 'https://example.com',
      });
      console.log(r);
    } catch (error) {
      const err = error as any;
      console.log(err.code, err.message);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleSources}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Get Data sources
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handlePresent}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textWhite]}>
            Present Data Sources View
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
