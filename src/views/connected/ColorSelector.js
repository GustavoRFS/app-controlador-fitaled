import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ColorWheel} from '../../components/ColorWheel';
import colorsys from 'colorsys';
import AddFavoriteButton from '../../components/AddFavoriteButton';
import {ScrollView} from 'react-native-gesture-handler';
import BrightnessControl from '../../components/BrightnessControl';

import PowerButton from '../../components/PowerButton';

export default () => {
  const [currentColor, setColor] = useState({r: 0, g: 255, b: 75});

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <PowerButton />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.view}>
          <View style={styles.colorWheel}>
            <ColorWheel
              initialColor={'#00ff75'}
              onColorChange={(color) => {
                const rgb = colorsys.hsv2Rgb(color.h, color.s, color.v);
                setColor(rgb);
              }}
              style={{width: 230, height: 230}}
            />
          </View>
          <View>
            <AddFavoriteButton color={currentColor}></AddFavoriteButton>
          </View>
          <BrightnessControl />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingVertical: 20,
  },
  view: {
    display: 'flex',
    backgroundColor: '#2d2d2d',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 380,
  },
  colorWheel: {
    width: 242,
    height: 242,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
