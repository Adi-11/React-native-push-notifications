import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
} from 'react-native';
import {
  NotificationType,
  useNotificationHistoryHook,
} from '../helpers/Notification.store';
import {color} from '../styles/col';
import {
  TypeOneNotificationComponent,
  TypeThreeNotificationComponent,
  TypeTwoNotificationComponent,
  TypeZeroNotificationComponent,
} from './NotificationListComponents';

const IMAGE_SIZE = 70;
const SPACING = 20;
const ANIMATION = IMAGE_SIZE + SPACING * 3;

// const cards = [...Array(20).keys()].map((item: any, idx: number) => {
//   return {
//     key: idx,
//     image: "require('../assets/card5.jpg')",
//     title: 'Notifcation 1',
//     description: 'Description Of the notification Yawlit!!!',
//     buttonTitle: 'Get it now',
//   };
// });

const cards: NotificationType[] = [];

export const NotificationList: React.FC<any> = () => {
  const notificationsHistory = useNotificationHistoryHook();
  useEffect(() => {
    if (notificationsHistory && notificationsHistory[0]) {
      console.log({notificationsHistory: notificationsHistory});
      cards.push(notificationsHistory[0]);
    }
  }, [notificationsHistory]);
  return (
    <View>
      <ScrollView
        style={{paddingTop: 10}}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          bottom: 20,
        }}>
        <TypeZeroNotificationComponent />
        <TypeOneNotificationComponent />
        <TypeTwoNotificationComponent />
        <TypeThreeNotificationComponent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 50,
    marginRight: SPACING / 2,
  },

  local: {
    width: 100,
    height: 35,
    backgroundColor: '#fc5c65',
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  txt: {
    margin: 5,
  },
});
