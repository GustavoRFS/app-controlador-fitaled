import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavColorsContext = createContext({
  favoriteColors: [],
  addColor: undefined,
  removeColor: undefined,
});

export default FavColorsContext;

export const FavColorsProvider = ({children}) => {
  const AsyncSave = async (newColors) => {
    await AsyncStorage.setItem(
      'favorite_colors',
      JSON.stringify(newColors),
    ).catch((err) => {
      console.error(err);
    });
  };

  const [favoriteColors, setFavoriteColors] = useState([]);

  const addColor = (color) => {
    //Clones the favoriteColors array without becoming the same state
    const colorsArray = [...favoriteColors, color];
    setFavoriteColors(colorsArray);
    AsyncSave(colorsArray);
  };

  const removeColor = (color) => {
    const index = favoriteColors.indexOf(color);
    if (index >= 0 && index < favoriteColors.length) {
      const colorsArray = [...favoriteColors];

      colorsArray.splice(index, 1);
      setFavoriteColors(colorsArray);

      AsyncSave(colorsArray);
    }
  };

  useEffect(() => {
    console.log('ue 1');
    AsyncStorage.getItem('favorite_colors')
      .then((value) => {
        console.log(value);
        setFavoriteColors(value === null ? [] : JSON.parse(value));
      })
      .catch((err) => {
        console.error(err);
        setFavoriteColors([]);
      });
  }, []);

  return (
    <FavColorsContext.Provider
      value={{
        favoriteColors,
        addColor,
        removeColor,
      }}>
      {children}
    </FavColorsContext.Provider>
  );
};
