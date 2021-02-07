import React from 'react';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={{...styles.container, backgroundColor: props.color}}></View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    marginHorizontal: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
