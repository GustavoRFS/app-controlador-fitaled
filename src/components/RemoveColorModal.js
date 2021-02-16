import React from 'react';
import {View, Modal, Text, Button, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 60,
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: '#2d2d2d',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    height: 280,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    color: '#fbf5f3',
    fontSize: 20,
    textAlign: 'center',
  },
});
