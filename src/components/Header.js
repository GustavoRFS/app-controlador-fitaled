import React, {useState} from 'react';
import {Dimensions, View, Text} from 'react-native';

export default () => {
  const [headerWidth, setHeaderWidth] = useState(
    Dimensions.get('window').width,
  );

  Dimensions.addEventListener('change', () => {
    setHeaderWidth(Dimensions.get('window').width);
  });

  return (
    <View
      style={{
        width: headerWidth,
        height: 45,
        backgroundColor: '#A42CD6',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#fbf5f3',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        Led Controller
      </Text>
    </View>
  );
};
