import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import BleContext from '../context/bleContext';

import TabNavigation from './TabNavigation';
import ConnectionView from '../views/ConnectionView';

export default () => {
  const {isConnected} = useContext(BleContext);

  return (
    <NavigationContainer>
      {isConnected ? <TabNavigation /> : <ConnectionView />}
    </NavigationContainer>
  );
};
