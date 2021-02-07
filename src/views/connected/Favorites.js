import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import FavoriteColor from '../../components/FavoriteColor';

export default () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#2d2d2d'}}
      contentContainerStyle={styles.container}>
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
      <FavoriteColor color="#faef29" />
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
});
