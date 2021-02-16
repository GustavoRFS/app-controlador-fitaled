import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FavColorsContext from '../../context/FavColorsContext';
import FavoriteColor from '../../components/FavoriteColor';
import BrightnessControl from '../../components/BrightnessControl';
import RemoveColorModal from '../../components/RemoveColorModal';

import PowerButton from '../../components/PowerButton';

export default (props) => {
  const {favoriteColors, removeColor} = useContext(FavColorsContext);
  const [modalVisible, setModalVisibility] = useState(false);
  const [colorToBeRemoved, setColorToRemove] = useState(favoriteColors[0]);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#2d2d2d'}}
      contentContainerStyle={{paddingVertical: 20}}>
      <PowerButton />
      <View style={styles.container}>
        <RemoveColorModal
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisibility(false);
          }}
          onConfirmRemove={() => {
            removeColor(colorToBeRemoved);
          }}
          color={colorToBeRemoved}
        />
        {favoriteColors.length === 0 ? (
          <Text style={styles.text}>
            Você não tem nenhuma cor nos favoritos
          </Text>
        ) : (
          favoriteColors.map((color, index) => {
            return (
              <FavoriteColor
                onLongPress={() => {
                  setColorToRemove(color);
                  setModalVisibility(true);
                }}
                key={index}
                color={color}
              />
            );
          })
        )}
      </View>
      <BrightnessControl />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#FBF5F3',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});
