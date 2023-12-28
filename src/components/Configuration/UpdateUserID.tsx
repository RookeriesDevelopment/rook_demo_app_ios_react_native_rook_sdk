import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/hooks';
import { View, Text, TextInput, TouchableWithoutFeedback, AppState, StyleSheet } from 'react-native';
import { useRookConfiguration } from 'react-native-rook-sdk-apple-health';
import { Alert } from 'react-native';
import { useRookSummaries } from 'react-native-rook-sdk-apple-health';

export const UpdateUserIDConfig = () => {
  const [currentUserID, setCurrentUserID] = useState('User id');

  const { Fonts, Gutters, Common } = useTheme();

  const { ready, updateUserID, clearUserID, getUserID, syncUserTimezone } =
    useRookConfiguration();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isSync, setIsSync] = useState(false);
  const {
    syncYesterdaySummaries,
  } = useRookSummaries();

  useEffect(() => {
    if (ready) {
      getUserID().then(setCurrentUserID).catch(console.log);
      handleUpdateYesterdaySummaries();
    }
  }, [ready]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        if (ready) {
          handleUpdateYesterdaySummaries();
        }
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleUpdateYesterdaySummaries = async (): Promise<void> => {
    setIsSync(true);
    const result = await syncYesterdaySummaries();
    setIsSync(false);
  };

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

  const handleView = () => {
    if(isSync){
     return  (<View style= {styles.top}>
      <Text style={[Fonts.textWhite, Fonts.textCenter, Gutters.smallVMargin]}>
        Sync yesterday summaries ...</Text>
    </View>);
    } else {
      <View></View>
    }
  }

  return (
    ready && (
      <View>
        <View style={Gutters.tinyHMargin}>
          {handleView()}
          <Text style={[Fonts.titleSmall, Fonts.textCenter]}>
            Configure your user id
          </Text>

          <Text style={[Fonts.titleSmall, Fonts.textCenter, Gutters.smallVMargin]}>
            User id: {currentUserID}
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

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'grey',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
})

