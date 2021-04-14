import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {
  LocalNotificationInit,
  ScheduledLocalNotificationInit,
  SendRemoteNotifcation,
} from '../helpers/PushNotificationConfiguration';
import {TouchableComponent} from '../helpers/Touchables';

interface IProps {
  navigation: any;
}

interface IState {}

export default class NotificationScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    PushNotification.channelExists('tester1234', function (exists) {
      console.log(exists); // true/false
    });
  }

  handleLocalNotification = () => {
    LocalNotificationInit();
  };

  handleScheduleNotification = () => {
    ScheduledLocalNotificationInit();
  };
  handleRemoteNotifcation = async () => {
    const token = await AsyncStorage.getItem('fcmToken');
    let notificationObj = {
      data: {
        id: 1,
        type: 'redirect',
        name: 'Tester 2',
      },
      title: 'Test Notification',
      Body: 'Check this Test Notification..!!',
      token: token,
    };
    const res = await SendRemoteNotifcation(notificationObj);
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Press a button to trigger the notification</Text>
        <View style={styles.local}>
          <TouchableComponent onPress={this.handleLocalNotification}>
            <View style={styles.txt}>
              <Text style={{fontSize: 20}}>Local Notification</Text>
            </View>
          </TouchableComponent>
        </View>
        <View style={styles.remote}>
          <TouchableComponent onPress={this.handleScheduleNotification}>
            <View style={styles.txt}>
              <Text style={{fontSize: 20}}>Schedule Notification</Text>
            </View>
          </TouchableComponent>
        </View>

        <View style={styles.remote}>
          <TouchableComponent>
            <View style={styles.txt}>
              <Text
                style={{fontSize: 20, height: '100%'}}
                onPress={this.handleRemoteNotifcation}>
                Remote Notification
              </Text>
            </View>
          </TouchableComponent>
        </View>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  local: {
    width: 270,
    height: 50,
    backgroundColor: '#fc5c65',
    marginBottom: 10,
    borderRadius: 10,
  },

  remote: {
    width: 270,
    height: 50,
    backgroundColor: '#4ecdc4',
    marginBottom: 10,
    borderRadius: 10,
  },
  txt: {
    alignItems: 'center',
    marginTop: 10,
    fontSize: 20,
  },
});
