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
} from 'react-native';
import {
  NotificationType,
  useNotificationHistoryHook,
} from '../helpers/Notification.store';

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
    <View style={{flex: 1}}>
      <Animated.FlatList
        data={cards}
        keyExtractor={item => String(item.key)}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: 'rgba(225,225,225, 0.9)',
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                borderRadius: 20,
                width: '100%',
                paddingRight: SPACING * 3,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                marginBottom: SPACING,
              }}>
              <Image
                style={styles.card}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View>
                <Text style={{fontSize: 22, fontWeight: '600'}}>
                  {item.title}
                </Text>
                <Text
                  style={{fontSize: 16, textAlignVertical: 'top'}}
                  numberOfLines={1}>
                  {item.description}
                </Text>
                <View style={styles.local}>
                  <TouchableOpacity
                    onPress={() => console.log('You got it!!!')}>
                    <View style={styles.txt}>
                      <Text style={{fontSize: 16}}>{item.buttonText}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
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
