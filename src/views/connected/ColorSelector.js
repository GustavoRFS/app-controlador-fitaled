import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';

import {ColorWheel} from '../../components/ColorWheel';
import colorsys from 'colorsys';
import AddFavoriteButton from '../../components/AddFavoriteButton';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default () => {
  const [color, setColor] = useState('#5fDD9d');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.view}>
        <View style={styles.colorWheel}>
          <ColorWheel
            initialColor={'#5fDD9D'}
            onColorChange={(color) => {
              const rgb = colorsys.hsv2Rgb(color.h, color.s, color.v);

              console.log({rgb});
            }}
            style={{width: 230, height: 230}}
          />
        </View>
        <View>
          <AddFavoriteButton
            onPress={() => {
              console.warn('kkk');
            }}>
            <Icon name="star" size={24} color={'#2d2d2d'} />
          </AddFavoriteButton>
        </View>
        <View style={styles.brightness}>
          <View style={{width: 35}}>
            <Button title="-" color="#A42CD6" />
          </View>

          <Text style={{color: '#fbf5f3'}}>Brilho</Text>
          <View style={{width: 35}}>
            <Button title="+" color="#A42CD6" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
  },
  view: {
    display: 'flex',
    backgroundColor: '#2d2d2d',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 380,
  },
  colorWheel: {
    width: 235,
    height: 235,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brightness: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
  },
});
