import React from 'react';
import {ScrollView, View, StyleSheet, Button, Text} from 'react-native';

import EffectCard from '../../components/EffectCard';

export default () => {
  return (
    <ScrollView
      style={styles.view}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.row}>
        <EffectCard
          title="Strobe"
          onPress={() => {
            console.warn('Strobe');
          }}
          description="Pisca pisca"
        />
        <EffectCard />
      </View>
      <View style={styles.row}>
        <EffectCard />
        <EffectCard />
      </View>
      <View style={styles.row}>
        <EffectCard />
        <EffectCard />
      </View>
      <View style={styles.speed}>
        <View style={{width: 35}}>
          <Button title="-" color="#A42CD6" />
        </View>

        <Text style={{color: '#fbf5f3', marginHorizontal: 20}}>Velocidade</Text>
        <View style={{width: 35}}>
          <Button title="+" color="#A42CD6" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: '#2d2d2d'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 25,
  },
  speed: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
  },
});
