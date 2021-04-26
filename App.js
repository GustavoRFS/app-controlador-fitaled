/*
  Background: #2d2d2d
  Header: #A42CD6
  Text: #FBF5F3
  other: #5fDD9d #FB3640
*/

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {BTContextProvider} from './src/context/BTContext';
import Routes from './src/routes/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#A42CD6" />
      <SafeAreaView style={styles.backgroundView}>
        <BTContextProvider>
          <Routes />
        </BTContextProvider>
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
