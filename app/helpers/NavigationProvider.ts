import * as React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name: any, params: any) => {
  (navigationRef as any).current?.navigate(name, params);
};
