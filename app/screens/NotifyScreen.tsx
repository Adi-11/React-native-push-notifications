import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {
  LocalNotificationInit,
  ScheduledLocalNotificationInit,
  SendRemoteNotifcation,
} from '../helpers/PushNotificationConfiguration';
import {TouchableComponent} from '../helpers/Touchables';

interface IProps {}

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
    let notificationObj = {
      data: {
        id: 1,
        type: 'redirect',
        name: 'Tester 2',
      },
      title: 'Test Notification',
      Body: 'Check this Test Notification..!!',
      token:
        'cVspFWMKT3m_Lxey65rG6g:APA91bExUX7FSpS1UD7UoUBMyv-C3T3QpzqdoATgy9B2cOJG94Du3QPTw9fjhMo_yCvF6N9jbl0ZUQY4Af_1WvwY2uqFm5V04zszlhnZXbYXpb1aF-nrY2zTrXZPKfn_5YwQAMm5jZyo',
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
