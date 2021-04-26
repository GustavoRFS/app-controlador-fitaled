import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

export default () => {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor="#2d2d2d" barStyle="light-content" />
      <Image
        style={{width: 180, height: 180, marginBottom: 200}}
        source={require('../assets/icon.png')}
      />
      <ActivityIndicator color="#A42CD6" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
