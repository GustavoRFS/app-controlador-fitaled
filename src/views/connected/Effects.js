import React from 'react';
import {ScrollView, View, StyleSheet, Button, Text} from 'react-native';
import EffectCard from '../../components/EffectCard';

import PowerButton from '../../components/PowerButton';

export default () => {
  return (
    <ScrollView
      style={styles.view}
      contentContainerStyle={{
        paddingVertical: 20,
      }}>
      <PowerButton />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <EffectCard title="Strobe" command="S" description="Pisca pisca" />
        <EffectCard
          title="Smooth"
          command="s"
          description="Troca as cores de forma suave"
        />
        <EffectCard
          title="Flash"
          command="F"
          description="Pisca rapidamente a última cor selecionada"
        />
        <EffectCard
          title="Fade monocolor"
          command="f"
          description="Pisca lentamente a última cor selecionada"
        />
        <EffectCard
          title="Fade"
          command="e"
          description="Pisca lentamente algumas cores"
        />
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
  view: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  speed: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
    alignSelf: 'center',
  },
});
