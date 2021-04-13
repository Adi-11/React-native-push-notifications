import React, {Component} from 'react';
import {BehaviorSubject, Subscription} from 'rxjs';

export interface notifyObj {
  data: {
    [key: string]: string;
  };
  title: string;
  body: string;
}

// export class NotificationProvider {
//   _notificationData: notifyObj = null;

//   set notificationData(notify: notifyObj) {
//     this._notificationData = notify;
//   }

//   get notificationData(): notifyObj {
//     return this._notificationData;
//   }
// }

// let notification = new NotificationProvider();

// const notificationSubject = new BehaviorSubject<notifyObj>(
//   notification.notificationData,
// );

// export const notificationStore = {
//   setNotificationData: (notify: notifyObj) => {
//     console.log({notify: notify});
//     let data = notify;
//     notificationSubject.next(data);
//   },

//   getNotificationData: ()=> {
//     notificationSubject.getValue();
//   },

//   getNotificationDataObservable: () => notificationSubject.asObservable(),
// };

// export class useNotificationState extends Component<any, notifyObj, any> {
//   subscription: Subscription;
//   constructor(props: any) {
//     super(props);

//       this.state = {
//         notification: notificationStore.getNotificationData();
//       };

//   }

//   // componentDidUpdate() {
//   //   this.subscription = notificationStore
//   //     .getNotificationDataObservable()
//   //     .subscribe(s => {
//   //       this.setState({
//   //         body: s.body,
//   //         data: s.data,
//   //         title: s.title,
//   //       });
//   //     });
//   // }

//   componentWillUnmount() {
//     this.subscription.unsubscribe();
//   }

//   render() {
//     this.subscription = notificationStore
//       .getNotificationDataObservable()
//       .subscribe(s => {
//         this.setState({
//           body: s.body,
//           data: s.data,
//           title: s.title,
//         });
//       });
//     return null;
//   }
// }

// export const useNotificationhook = new useNotificationState({});
