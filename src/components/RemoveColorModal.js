import React from 'react';
import {View, Modal, Text, Button} from 'react-native';
import styles from '../styles/modal';
import FavoriteColor from './FavoriteColor';

export default (props) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.centeredView}>
          <Text style={styles.text}>Deseja remover a seguinte cor?</Text>
          <FavoriteColor disabled={true} color={props.color} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 140,
            }}>
            <View style={{width: 60}}>
              <Button
                title="Sim"
                color="#A42CD6"
                onPress={() => {
                  props.onConfirmRemove();
                  props.onRequestClose();
                }}
              />
            </View>
            <View style={{width: 60}}>
              <Button
                title="Não"
                color="#A42CD6"
                onPress={props.onRequestClose}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
