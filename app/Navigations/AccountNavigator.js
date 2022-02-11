import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MessagesScreen from '../Screens/MessagesScreen.js';
import AccountScreen from '../Screens/AccountScreen.js';

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Account" component={AccountScreen} />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator
