import React from 'react';
import { Link } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { UpdateUserID } from '@/components';

export const HomeScreen = () => {
  const { Common, Fonts, Gutters } = useTheme();

  return (
    <View>
      <UpdateUserID />

      <Text style={[Fonts.titleSmall, Fonts.textCenter, Gutters.smallVMargin]}>
        Choose your options
      </Text>

      <View style={Common.button.rounded}>
        <Link screen="Permissions">
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
        <Link screen="Summaries">
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
        <Link screen="Events">
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
        <Link screen="DataSources">
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
