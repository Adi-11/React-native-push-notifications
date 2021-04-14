import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
export const checkPermisson = async () => {
  const enabled = await messaging().hasPermission();

  if (enabled) {
    getToken();
  } else {
    requestUserPermission();
  }
};

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('fcmToken:', fcmToken);
  if (!fcmToken) {
    fcmToken = await messaging().getToken();
    if (fcmToken) {
      // user has a device token
      // console.log('fcmToken:', fcmToken);
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
  // console.log({fcmToken: fcmToken});
};

// For IOS only
const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log({Authorization_status: authStatus});
  }
};
