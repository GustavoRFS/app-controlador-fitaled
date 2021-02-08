import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FavColorsContext from '../../context/FavColorsContext';
import FavoriteColor from '../../components/FavoriteColor';

import BrightnessControl from '../../components/BrightnessControl';
//import RemoveColorModal from '../../components/RemoveColorModal';

export default (props) => {
  const {favoriteColors, removeColor} = useContext(FavColorsContext);
  //const [modalVisible, setModalVisibility] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#2d2d2d'}}>
      <View style={styles.container}>
        {favoriteColors.length === 0 ? (
          <Text style={styles.text}>
            Você não tem nenhuma cor nos favoritos
          </Text>
        ) : (
          favoriteColors.map((color, index) => {
            return <FavoriteColor key={index} color={color} />;
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
    paddingVertical: 10,
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
