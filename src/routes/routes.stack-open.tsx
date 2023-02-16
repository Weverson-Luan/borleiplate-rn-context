/**
 * IMPORTS
 */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Home } from '../screens/home';

const Stack = createNativeStackNavigator();

function RoutesStackOpen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

/**
 * EXPORTS
 */
export { RoutesStackOpen };
