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
    let notificationObj = {
      data: {
        id: 1,
        type: 'redirect',
        name: 'Tester 2',
      },
      title: 'Test Notification',
      Body: 'Check this Test Notification..!!',
      token:
        'dprBSXqwQ3uNjxjUqUev4F:APA91bGaTCY2c4PQ44fzylpouNo76pS62-oJkVczFf7q2lH_gkRb96LUg77SV3eVkPAwhZx3gF_yDvzevf3IGIIm1VyMvCtjsfuxNdFCpLwcz72mcBENX15tzr5JyQmpjogLlpHEXjY4',
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
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('NotificationList')}
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
