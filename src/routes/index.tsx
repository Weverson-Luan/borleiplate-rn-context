/**
 * IMPORTS
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routes
import { RoutesStackOpen } from './routes.stack-open';

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <RoutesStackOpen />
    </NavigationContainer>
  );
};

/**
 * EXPORTS
 */
export { AppRoutes };
