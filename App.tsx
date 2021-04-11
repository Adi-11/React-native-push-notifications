import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {NotificationConfig} from './app/helpers/PushNotificationConfiguration';
import NotificationScreen from './app/screens/NotifyScreen';

// NotificationConfig();

const App = () => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'tester1234', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  });
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <NotificationScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
