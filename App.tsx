import React, {Component} from 'react';
import NotificationScreen from './app/screens/NotifyScreen';
import {checkPermisson} from './app/helpers/FireBaseConfiguration';
import messaging from '@react-native-firebase/messaging';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, navigate} from './app/helpers/NavigationProvider';
import {NotificationList} from './app/screens/NotificationHistoryScreen';
import {NotificationStore} from './app/helpers/Notification.store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import memoizeOne from 'memoize-one';
const Stack = createStackNavigator();
interface AppState {
  initialRouteName: string;
}

export interface NotificationType {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  navigationRoute: string;
  type: number;
  key: string;
}

const _storeSearches = async (dataToSave: NotificationType) => {
  let numberArray: NotificationType[] = [];
  try {
    let storedNumbers = await AsyncStorage.getItem('notifyList');
    if (storedNumbers !== null) {
      numberArray = JSON.parse(storedNumbers); // you could do some additional checks to make sure it is an array
    }
    numberArray.push(dataToSave);
    await AsyncStorage.setItem('notifyList', JSON.stringify(numberArray));
  } catch (error) {
    // Error saving data
  }
};
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
    // await AsyncStorage.removeItem('notifyList');
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  createNotificationListioner = async () => {
    // /**
    //  * @working
    //  */
    // const channel = new firebase.notifications.Android.Channel(
    //   'fcm_FirebaseNotifiction_default_channel',
    //   'Demo app name',
    //   firebase.notifications.Android.Importance.High,
    // )
    //   .setDescription('Demo app description')
    //   .setSound('default');
    // firebase
    //   .notifications()
    //   .android.createChannel(channel)
    //   .then(() => console.log('channle created'));

    /**
     * @working
     */
    this.notificationOpenedListener = messaging().onNotificationOpenedApp(
      remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigate('List');
      },
    );

    /**
     * @Working
     * ? ForeGround message listiner => event handing when the app is in foreground;
     */
    this.messageListener = messaging().onMessage(message => {
      console.log('JSON.stringify:', JSON.stringify(message));
    });

    this.backgroundhandler = messaging().setBackgroundMessageHandler(
      memoizeOne(async remoteMessage => {
        const {data, notification} = remoteMessage;
        var notifyData: NotificationType = {
          title: notification.title,
          description: notification.body,
          imageUrl: notification.android.smallIcon,
          buttonText: data.btnText,
          key: uuid.v4() as string,
          type: Number(data.type),
          navigationRoute: data.route,
        };
        await _storeSearches(notifyData);
        NotificationStore.updateNotificationHistory({
          key: notifyData.key,
        });
      }),
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
