import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import {HomeNavigator} from './home-navigator';
import {LoginNavigator} from './login-navigator';

export type RootNavigatorScreens = {
  LoginNavigator: undefined;
  HomeNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorScreens>();

export const RootNavigator = connect((state: any) => state)((props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      {props.isLogged ? (
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      ) : (
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
      )}
    </Stack.Navigator>
  );
});
