import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import BTContext from '../context/BTContext';

import TabNavigation from './TabNavigation';
import SplashScreen from '../views/SplashScreen';

export default () => {
  const {isConnected} = useContext(BTContext);

  return (
    <NavigationContainer>
      {isConnected ? <TabNavigation /> : <SplashScreen />}
    </NavigationContainer>
  );
};
