import {FIREBASE_SERVER_KEY} from '@env';
import PushNotification from 'react-native-push-notification';
PushNotification.configure({
  onRegister: function (token) {
    console.log({token: token});
  },

  onNotification: function (notification) {
    console.log({notification_local: notification});
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log({action: notification.action});
    console.log({notification: notification});
  },

  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
});

export const LocalNotificationInit = () => {
  console.log({ok: 'ok'});
  PushNotification.localNotification({
    channelId: 'tester1234',
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local notification demo',
    title: 'Local notification title',
    message: 'Expand me to see more',
    bigPictureUrl:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: ['Yes', 'No'],
  });
};

export const ScheduledLocalNotificationInit = () => {
  PushNotification.localNotificationSchedule({
    channelId: 'tester1234',
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local scheduled notification demo',
    title: 'Local scheduled notification title',
    bigPictureUrl:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    message: 'Scheduled notification message',
    vibrate: true,
    vibration: 500,
    playSound: true,
    soundName: 'default',
    actions: ['Yes', 'No'],
    date: new Date(Date.now() + 3 * 1000),
  });
};

export const SendRemoteNotifcation = async (data: any): Promise<void> => {
  const FIREBASE_KEY = FIREBASE_SERVER_KEY;
  const message = {
    registration_ids: [data.token],
    data: data.data,
    notification: {
      title: data.title,
      body: data.Body,
      vibrate: 1,
      sound: 1,
      priority: 'high',
      show_in_foreground: true,
      content_available: true,
      userInteraction: true,
    },
  };
  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Key=' + FIREBASE_KEY,
  });

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers,
    body: JSON.stringify(message),
  })
    .then(res => res.json())
    .then(res => console.log({res: res}))
    .catch(err => console.log({err: err}));
};
