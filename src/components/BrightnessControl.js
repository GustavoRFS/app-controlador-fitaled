import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.brightness}>
      <View style={{width: 35}}>
        <Button title="-" color="#A42CD6" />
      </View>

      <Text style={{color: '#fbf5f3'}}>Brilho</Text>
      <View style={{width: 35}}>
        <Button title="+" color="#A42CD6" onPress={props.onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brightness: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
    alignSelf: 'center',
    marginTop: 10,
  },
});
