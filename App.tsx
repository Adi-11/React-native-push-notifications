import React, {Component} from 'react';
import NotificationScreen from './app/screens/NotifyScreen';
import {checkPermisson} from './app/helpers/FireBaseConfiguration';
import firebase from 'react-native-firebase';
import messaging from '@react-native-firebase/messaging';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {navigationRef, navigate} from './app/helpers/NavigationProvider';
import {NotificationList} from './app/screens/NotificationHistoryScreen';
import {Linking} from 'react-native';
import {NotificationStore} from './app/helpers/Notification.store';
const Stack = createStackNavigator();
interface AppState {
  initialRouteName: string;
}
// done // // TODO : 0 => no-navigation; 1 => navigation in app; 2 => url redirect; 3 => User based notification({==, ==, ==, ==})
class App extends Component<any, AppState, any> {
  notificationListener: any;
  notificationOpenedListener: any;
  messageListener: () => any;
  backgroundhandler: void;
  onOpenMessageNotification: any;

  constructor(props: any) {
    super(props);
    this.state = {
      initialRouteName: 'Notifications',
    };
  }
  async componentDidMount() {
    checkPermisson();
    this.createNotificationListioner();
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  createNotificationListioner = async () => {
    /**
     * @working
     */
    const channel = new firebase.notifications.Android.Channel(
      'fcm_FirebaseNotifiction_default_channel',
      'Demo app name',
      firebase.notifications.Android.Importance.High,
    )
      .setDescription('Demo app description')
      .setSound('default');
    firebase
      .notifications()
      .android.createChannel(channel)
      .then(() => console.log('channle created'));

    /**
     * @working
     */
    this.notificationOpenedListener = messaging().onNotificationOpenedApp(
      remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        const {data, notification} = remoteMessage;
        // console.log({data, notification});
        var route = data.routeName;
        if (data.type === '1') {
          console.log('No Navigation');
        } else if (data.type === '2') {
          // navigate(route, {text: 'test'});
          /**
           * @navigation_handling
           * ?just needed to make the proper navigation screen
           */
        } else if (data.type == '3') {
          Linking.openURL('https://github.com/Adi-11');
        } else {
          navigate(route);
          NotificationStore.updateNotificationHistory([
            {
              title: notification.title,
              description: notification.body,
              imageUrl: data.imageUrl,
              buttonText: data.btnText,
              key: Math.ceil(Math.random() * 1000),
            },
          ]);
        }
      },
    );

    /**
     * @Working
     * ? ForeGround message listiner => event handing when the app is in foreground;
     */
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
        /**
         * ? if events are needed to be handled when the app is in background then this method will be triggred
         */
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
            name="List"
            component={NotificationList}
            options={{headerTitleAlign: 'center', headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
