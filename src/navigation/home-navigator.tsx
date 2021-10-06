import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';

export type HomeNavigatorScreens = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigatorScreens>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
