/**
 * IMPORTS
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import theme from './src/global/styles/theme/theme';
import { UserProvider } from './src/context/user/user';
import { ProductProvider } from './src/context/product/product';
import { AppRoutes } from './src/routes';

const App = () => {
  return (
    <ProductProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </UserProvider>
    </ProductProvider>
  );
};

/**
 * EXPORTS
 */
export default App;
