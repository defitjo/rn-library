import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/aboutScreen';
import AppHeader from '../custom/appHeader';

const Stack = createStackNavigator();

export default function AboutRoute() {
  return (
    <Stack.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00a5cf',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={{ headerTitle: () => <AppHeader title='About Deez bOOks' /> }}
      />
    </Stack.Navigator>
  );
};
