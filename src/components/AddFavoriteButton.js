import React, {useEffect, useState, useContext} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavColorsContext from '../context/FavColorsContext';

export default (props) => {
  const [isDisabled, setDisable] = useState(false);

  const {favoriteColors, addColor} = useContext(FavColorsContext);

  const [starColor, setStarColor] = useState(
    `rgb(${props.color.r},${props.color.g},${props.color.b})`,
  );

  const refreshButtonColor = () => {
    var found = false;
    favoriteColors?.forEach((favoriteColor) => {
      if (
        Math.abs(favoriteColor.r - props.color.r) < 5 &&
        Math.abs(favoriteColor.g - props.color.g) < 5 &&
        Math.abs(favoriteColor.b - props.color.b) < 5
      ) {
        found = true;
        setDisable(true);
        setStarColor(`rgb(${props.color.r},${props.color.g},${props.color.b})`);
      }
    });

    if (!found) {
      setDisable(false);
      setStarColor('#2d2d2d');
    }
  };

  useEffect(refreshButtonColor);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        addColor(props.color);
        refreshButtonColor();
      }}
      disabled={isDisabled}>
      <View
        style={{
          backgroundColor: isDisabled ? 'rgba(110,110,110,0.4)' : '#707070',
          borderRadius: 5,
          width: 60,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="star" size={24} color={starColor} />
      </View>
    </TouchableNativeFeedback>
  );
};
