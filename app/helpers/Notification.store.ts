import {useEffect, useState} from 'react';
import {BehaviorSubject, Subscription} from 'rxjs';

export interface NotificationType {
  key: number;
}

class NotificationHistory {
  _notificationHistoryData: NotificationType;

  set notificationHistoryData(data: NotificationType) {
    this._notificationHistoryData = data;
  }

  get notificationHistoryData() {
    return this._notificationHistoryData;
  }
}

let notificationHistory = new NotificationHistory();

const notificationHistorySubject = new BehaviorSubject<NotificationType>(
  notificationHistory.notificationHistoryData,
);

export const NotificationStore = {
  updateNotificationHistory: (value: any) => {
    let data = value;
    console.log({value: value});
    notificationHistorySubject.next({...data});
  },

  getNotificationHistory: () => {
    console.log('got');
    notificationHistorySubject.getValue();
  },
  getnotificationHistoryObservable: () =>
    notificationHistorySubject.asObservable(),
};

// custome hook
export const useNotificationHistoryHook = () => {
  const [state, setState] = useState<NotificationType | void>(
    NotificationStore.getNotificationHistory,
  );

  useEffect(() => {
    const subscription: Subscription = NotificationStore.getnotificationHistoryObservable().subscribe(
      s => {
        setState(s);
      },
    );
    return () => subscription.unsubscribe();
  }, []);

  return state;
};
