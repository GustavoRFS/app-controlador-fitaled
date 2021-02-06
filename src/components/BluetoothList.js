import React from 'react';
import {View} from 'react-native';

export default (props) => {
  {
    props.devices.map((device, index) => {
      <View key={index}>
        <Text>{device.name}</Text>
      </View>;
    });
  }
};
