import React from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';

export default (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    width: 160,
    height: 110,
    backgroundColor: '#343434',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6,
  },
  title: {
    fontSize: 18,
    color: '#FBF5F3',
  },
  description: {
    fontSize: 12,
    color: '#FBF5F3',
    marginTop: 4,
  },
});
