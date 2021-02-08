import React, {useState, createContext, useEffect} from 'react';

const FavColorsContext = createContext({
  favoriteColors: [],
  addColor: undefined,
  removeColor: undefined,
});

export default FavColorsContext;

export const FavColorsProvider = ({children}) => {
  const [favoriteColors, setFavoriteColors] = useState([]);

  const addColor = (color) => {
    setFavoriteColors([...favoriteColors, color]);

    //AsyncSave;
  };

  const removeColor = (color) => {
    const index = favoriteColors.indexOf(color);
    if (index >= 0 && index < favoriteColors.length) {
      const colorsArray = [...favoriteColors];
      colorsArray.splice(index, 1);
      setFavoriteColors(colorsArray);

      //AsyncSave;
    }
  };

  useEffect(() => {
    //AsyncStorage loading
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
