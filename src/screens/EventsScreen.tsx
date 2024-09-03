import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Text } from 'react-native';
import { useRookEvents } from 'react-native-rook-sdk-apple-health';

export const EventsScreen = () => {
  const { Fonts, Gutters, Common } = useTheme();

  const [date, setDate] = useState('');
  const [data, setData] = useState('');

  const {
    ready,
    syncBodyHeartRateEvent,
    syncPhysicalHeartRateEvent,
    syncBodyOxygenationEvent,
    syncPhysicalOxygenationEvent,
    syncTrainingEvent,
  } = useRookEvents();

  const handleSyncBodyHeartRateEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBodyHeartRateEvent(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncPhysicalHeartRateEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalHeartRateEvent(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncPhysicalOxygenationEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncPhysicalOxygenationEvent(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncBodyOxygenationEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncBodyOxygenationEvent(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  const handleSyncTrainingEvents = async (): Promise<void> => {
    try {
      setData('Loading . . .');
      const result = await syncTrainingEvent(date);
      setData(`Result: ${result}`);
    } catch (error) {
      setData(`${error}`);
    }
  };

  return ready ? (
    <View>
      <View style={Gutters.tinyHMargin}>
        <TextInput
          value={date}
          style={[Common.input.base]}
          placeholder="YYYY-MM-DD"
          onChangeText={setDate}
        />
      </View>

      <TouchableWithoutFeedback onPress={handleSyncBodyHeartRateEvents}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
            Sync Body Heart Rate Events
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncPhysicalHeartRateEvents}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
            Sync Physical Heart Rate Events
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncBodyOxygenationEvents}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
            Sync Body Oxygenation Events
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncPhysicalOxygenationEvents}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
            Sync Physical Oxygenation Events
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={handleSyncTrainingEvents}>
        <View style={Common.button.rounded}>
          <Text style={[Fonts.textTiny, Fonts.textWhite, Fonts.textCenter]}>
            Sync training Events
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Text style={[Fonts.textSmall, Fonts.textWhite]}>{data}</Text>
    </View>
  ) : (
    <Text>Loading . . .</Text>
  );
};
