/**
 * IMPORTS
 */
import React from 'react';
import { useTheme } from 'styled-components';

// components
import { Text } from '../../components/text';

// context api
import { useAuth } from '../../context/hooks/user/use-hook';
import { useProduct } from '../../context/hooks/product/product-hook';

// styles
import { Container } from './styles';

const Home = () => {
  const theme = useTheme();
  const { user } = useAuth();

  return (
    <Container>
      <Text
        text={`Hello World ${user?.name}`}
        fontFamily="Poppins-Thin"
        color={theme.colors.red_50}
        size={32}
        align="center"
        letterHeight={32}
        letterSpacing={0.5}
      />
    </Container>
  );
};

/**
 * EXPORTS
 */
export { Home };
