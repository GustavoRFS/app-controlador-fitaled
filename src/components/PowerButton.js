import React, {useContext} from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BTContext from '../context/BTContext';

export default () => {
  const {sendData} = useContext(BTContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <Pressable
        onPress={() => {
          sendData('P');
        }}>
        <Icon name="power-off" size={38} color="#fbf5f3" />
      </Pressable>
    </View>
  );
};
