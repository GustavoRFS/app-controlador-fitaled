/*
  Background: #2d2d2d
  Header: #A42CD6
  Text: #FBF5F3
  other: #5fDD9d #FB3640
*/

import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {BleContextProvider} from './src/context/bleContext';
import Routes from './src/routes/index';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#A42CD6" />
      <SafeAreaView style={styles.backgroundView}>
        <Header />
        <BleContextProvider>
          <Routes />
        </BleContextProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: '#2d2d2d',
    flex: 1,
  },
});

export default App;
