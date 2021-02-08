import React from 'react';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default (props) => {
  return (
    <View>
      <TouchableNativeFeedback
        disabled={props.disabled}
        onLongPress={() => props.onLongPress()}>
        <View
          style={{
            ...styles.container,
            backgroundColor: `rgb(${props.color.r},${props.color.g},${props.color.b})`,
            flexDirection: 'row-reverse',
          }}>
          <View style={{display: 'none', opacity: 0}}>
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: '#2d2d2d',
                  borderColor: '#fafafa',
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 16,
                  height: 16,
                  translateY: -4,
                  translateX: 4,
                }}></View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    marginHorizontal: 10,
    marginVertical: 10,
    zIndex: -100,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
