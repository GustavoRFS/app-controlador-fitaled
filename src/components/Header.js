import React, {useState} from 'react';
import {Dimensions, View, Image} from 'react-native';

export default () => {
  /*const [headerWidth, setHeaderWidth] = useState(
    Dimensions.get('window').width,
  );

  Dimensions.addEventListener('change', () => {
    setHeaderWidth(Dimensions.get('window').width);
  });
*/
  return (
    <View
      style={{
        width: '100%',
        height: 55,
        backgroundColor: '#A42CD6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/icon300x.png')}
        resizeMode="contain"
        style={{width: 40}}
      />
    </View>
  );
};
