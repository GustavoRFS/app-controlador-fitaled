import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import ColorSelector from '../views/connected/ColorSelector';
import Effects from '../views/connected/Effects';
import Favorites from '../views/connected/Favorites';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="ColorSelector"
      style={{backgroundColor: '#2d2d2d'}}
      shifting={true}
      barStyle={{backgroundColor: '#A42CD6'}}>
      <Tab.Screen
        name="ColorSelector"
        component={ColorSelector}
        options={{
          tabBarLabel: 'Cores',
          tabBarColor: '#A42CD6',
          tabBarIcon: ({color}) => (
            <Icon name="palette" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Effects"
        component={Effects}
        options={{
          tabBarLabel: 'Efeitos',
          tabBarColor: '#FB3640',
          tabBarIcon: ({color}) => <Icon name="bolt" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarColor: '#00DD9d',
          tabBarIcon: ({color}) => <Icon name="star" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};
