import React from 'react';
import { useTheme } from '@/hooks';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRookDataSources } from 'react-native-rook-sdk-apple-health';

export const DataSourcesScreen = () => {
  const { Common, Fonts } = useTheme();

  const { getAvailableDataSources, presentDataSourceView } =
    useRookDataSources();

  const handleSources = async () => {
    try {
      console.log('loading . . .');
      const r = await getAvailableDataSources();
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePresent = async () => {
    try {
      console.log('loading . . .');
      const r = await presentDataSourceView();
      console.log(r);
    } catch (error) {
      console.log(error);
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
