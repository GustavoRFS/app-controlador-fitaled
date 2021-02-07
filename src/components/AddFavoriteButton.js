import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';

export default (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View
        style={{
          backgroundColor: '#ccc',
          borderRadius: 5,
          width: 60,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
};
