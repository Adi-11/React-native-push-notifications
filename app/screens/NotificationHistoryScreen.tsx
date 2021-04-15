import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {NotificationType} from '../../App';
import {useNotificationHistoryHook} from '../helpers/Notification.store';
import {TypeOneNotificationComponent} from './components/NotifyTypeOne';
import {TypeThreeNotificationComponent} from './components/NotifyTypeThree';
import {TypeTwoNotificationComponent} from './components/NotifyTypeTwo';
import {TypeZeroNotificationComponent} from './components/NotifyTypeZero';

interface NotificationListProps {}
export const NotificationList: React.FC<NotificationListProps> = () => {
  const [notifyData, setNotifyData] = useState<NotificationType[]>();
  const notificationKey = useNotificationHistoryHook();
  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('notifyList');
      setNotifyData(JSON.parse(data));
    })();
  }, [notificationKey]);
  return (
    <View>
      <ScrollView
        style={{paddingTop: 30}}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          bottom: 20,
        }}>
        {notifyData &&
          notifyData.map(
            (data: NotificationType, index: number) =>
              (data.type === 0 && (
                <TypeZeroNotificationComponent
                  key={data.key}
                  buttonText={data.buttonText}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  navigationRoute={data.navigationRoute}
                  title={data.title}
                />
              )) ||
              (data.type === 1 && (
                <TypeOneNotificationComponent
                  key={data.key}
                  buttonText={data.buttonText}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  navigationRoute={data.navigationRoute}
                  title={data.title}
                />
              )) ||
              (data.type === 2 && (
                <TypeTwoNotificationComponent
                  key={data.key}
                  buttonText={data.buttonText}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  navigationRoute={data.navigationRoute}
                  title={data.title}
                />
              )) ||
              (data.type === 3 && (
                <TypeThreeNotificationComponent
                  key={data.key}
                  buttonText={data.buttonText}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  navigationRoute={data.navigationRoute}
                  title={data.title}
                />
              )),
          )}
      </ScrollView>
    </View>
  );
};
