import React, {useContext} from 'react';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';

import BTContext from '../context/BTContext';

export default (props) => {
  const {sendData} = useContext(BTContext);
  return (
    <View>
      <TouchableNativeFeedback
        disabled={props.disabled}
        onLongPress={() => props.onLongPress()}
        onPress={() => {
          for (var i = 0; i < 5; i++) {
            sendData(`C ${props.color.r} ${props.color.g} ${props.color.b}`);
          }
        }}>
        <View
          style={{
            ...styles.container,
            backgroundColor: `rgb(${props.color.r},${props.color.g},${props.color.b})`,
            flexDirection: 'row-reverse',
          }}></View>
      </TouchableNativeFeedback>
    </View>
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
    zIndex: -100,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
