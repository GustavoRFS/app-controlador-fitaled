import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <Icon name="power-off" size={38} color="#fbf5f3" />
    </View>
  );
};
