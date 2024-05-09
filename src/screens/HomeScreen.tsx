import React, { useEffect } from 'react';
import { Link } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { UpdateUserID } from '@/components';
import { useRookBackGround } from 'react-native-rook-sdk-apple-health';

export const HomeScreen = () => {
  const { Common, Fonts, Gutters } = useTheme();
  const { ready, enableBackgroundForEvents, enableBackgroundForSummaries } =
    useRookBackGround();

  useEffect(() => {
    if (ready) {
      enableBackgroundSync();
    }
  }, [ready]);

  // Enable and start the background sync
  const enableBackgroundSync = async (): Promise<void> => {
    try {
      await enableBackgroundForEvents();
      await enableBackgroundForSummaries();
      console.log('enabled');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <UpdateUserID />

      <Text style={[Fonts.titleSmall, Fonts.textCenter, Gutters.smallVMargin]}>
        Choose your options
      </Text>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Permissions' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Permissions
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Summaries' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Summaries
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Events' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Events
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'Configuration' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Configuration
          </Text>
        </Link>
      </View>

      <View style={Common.button.rounded}>
        <Link to={{ screen: 'DataSources' }}>
          <Text
            style={[
              Fonts.textSmall,
              Fonts.textCenter,
              Fonts.textWhite,
              Fonts.textBold,
            ]}
          >
            Include other data sources
          </Text>
        </Link>
      </View>
    </View>
  );
};
