/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from './Screens/ProfileScreen';
import { ListScreen } from './Screens/ListScreen';

export default function App () {
  const Stack = createStackNavigator();

  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
      
}


