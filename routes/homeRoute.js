import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/homeScreen';
import AppHeader from '../custom/appHeader';

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00a5cf'
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerTitle: () => <AppHeader title='Deez Books' /> }}
      />
    </Stack.Navigator>
  )
}
