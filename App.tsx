import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';
import NotificationScreen from './app/screens/NotifyScreen';
import {checkPermisson} from './app/helpers/FireBaseConfiguration';
import firebase from 'react-native-firebase';
import messaging from '@react-native-firebase/messaging';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {navigationRef, navigate} from './app/helpers/NavigationProvider';
import PushNotification from 'react-native-push-notification';
import {Wallet} from './app/screens/NotificationHistoryScreen';
const Stack = createStackNavigator();
// TODO: Capture the notifcation
interface AppState {
  data: {
    [key: string]: string;
  };
  title: string;
  body: string;
  initialRouteName: string;
}

const notificationTypeArray = [
  {
    redirection: 'none',
  },
  {redirection: 'param'},
  {URL: 'url'},
  {
    component: 'desigin is pending',
  },
];

class App extends Component<any, AppState, any> {
  notificationListener: any;
  notificationOpenedListener: any;
  messageListener: () => any;
  backgroundhandler: void;
  onOpenMessageNotification: any;

  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
      title: '',
      body: '',
      initialRouteName: 'NotificationList',
    };
  }
  async componentDidMount() {
    checkPermisson();
    this.createNotificationListioner().then(() =>
      console.log({mount_state: this.state}),
    );
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
    // console.log({state: this.state});
  }

  createNotificationListioner = async () => {
    const channel = new firebase.notifications.Android.Channel(
      'fcm_FirebaseNotifiction_default_channel',
      'Demo app name',
      firebase.notifications.Android.Importance.High,
    )
      .setDescription('Demo app description')
      .setSound('default');
    firebase.notifications().android.createChannel(channel);

    this.notificationOpenedListener = messaging().onNotificationOpenedApp(
      remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        const {data, from, notification} = remoteMessage;
        console.log({data, from, notification});
        var route = data.type;
        navigate(route, {name: data.name});
        // this.setState({initialRouteName: route});
      },
    );

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const {title, body} = notificationOpen.notification;
      // console.log({getInitialNotification: notificationOpen});
      Alert.alert(title, body);
    }
    // TODO : 0 => no-navigation; 1 => navigation in app; 2 => url redirect; 3 => User based notification({==, ==, ==, ==})
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
        const notifyObj = {
          data: remoteMessage.data,
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
        };
        this.setState(notifyObj);
        Alert.alert(notifyObj.data.type);
        console.log({function_state: this.state});
      },
    );
  };
  render() {
    return (
      <NavigationContainer ref={navigationRef as any}>
        <Stack.Navigator initialRouteName={this.state.initialRouteName}>
          <Stack.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="NotificationList"
            component={Wallet}
            options={{headerTitleAlign: 'center', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{margin: 10}}>
        <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default App;
