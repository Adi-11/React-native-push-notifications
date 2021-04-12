import React, {Component, useEffect, useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import NotificationScreen from './app/screens/NotifyScreen';
import {checkPermisson} from './app/helpers/FireBaseConfiguration';
import firebase, {notifications, RNFirebase} from 'react-native-firebase';
import messaging from '@react-native-firebase/messaging';

class App extends Component<any, any, any> {
  notificationListener: any;
  notificationOpenedListener: any;
  messageListener: () => any;
  backgroundhandler: void;
  async componentDidMount() {
    checkPermisson();
    this.createNotificationListioner();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  createNotificationListioner = async () => {
    const channel = new firebase.notifications.Android.Channel(
      'fcm_FirebaseNotifiction_default_channel',
      'Demo app name',
      firebase.notifications.Android.Importance.Max,
    )
      .setDescription('Demo app description')
      .setSound('default');
    firebase.notifications().android.createChannel(channel);

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        // const {title, body} = notificationOpen.notification;
        const {
          action,
          notification,
        }: {
          action: any;
          notification: RNFirebase.notifications.Notification;
        } = notificationOpen;
        // console.log({action, notification});
        const {android, body, data, notificationId, title} = notification;
        console.log(android, body, data, notificationId, title);
        // Alert.alert(title, body);
      });

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const {title, body} = notificationOpen.notification;
      console.log({getInitialNotification: notificationOpen});
      Alert.alert(title, body);
    }

    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        console.log({notification_1: notification});
        const {title, body} = notification;
        const localNotification = new firebase.notifications.Notification()
          .setSound('default')
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setBody(notification.body)
          .android.setChannelId('fcm_FirebaseNotifiction_default_channel')
          .android.setSmallIcon('ic_launcher')
          .android.setColor('#000')
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.log({err: err}));
      });

    this.messageListener = messaging().onMessage(message => {
      //process data message
      console.log('JSON.stringify:', JSON.stringify(message));
    });

    this.backgroundhandler = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      },
    );
  };
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle={'dark-content'} />
        <NotificationScreen />
        <Text>heool</Text>
      </SafeAreaView>
    );
  }
}

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
