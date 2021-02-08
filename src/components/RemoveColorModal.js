import React from 'react';
import {View, Modal, Text} from 'react-native';
import FavoriteColor from './FavoriteColor';

export default (props) => {
  return (
    <Modal
      animationType="fade"
      visible={props.visible}
      style={{backgroundColor: '#fff'}}
      onRequestClose={props.onRequestClose}>
      <View>
        <Text></Text>
        <FavoriteColor disabled={true} color={props.color} />
      </View>
    </Modal>
  );
};
