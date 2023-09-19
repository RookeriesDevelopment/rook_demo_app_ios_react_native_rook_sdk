import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({ Colors, Gutters, FontSize }: CommonParams<C>) {
  return StyleSheet.create({
    base: {
      ...Gutters.tinyTMargin,
      ...Gutters.tinyPadding,
      ...Gutters.tinyBMargin,
      borderColor: Colors.white,
      color: Colors.white,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: FontSize.small,
    },
  });
}
