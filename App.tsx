import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import theme from './src/global/styles/theme/theme';
import { Home } from './src/screens/home';
import { UserProvider } from './src/context/user/user';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
