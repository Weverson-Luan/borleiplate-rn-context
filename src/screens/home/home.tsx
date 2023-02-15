/**
 * IMPORTS
 */
import React from 'react';
import { useAuth } from '../../context/hooks/use-hook';
import { useTheme } from 'styled-components';

// components
import { Text } from '../../components/text';

// styles
import { Container } from './styles';

const Home = () => {
  const theme = useTheme();
  const { user, products } = useAuth();

  return (
    <Container>
      <Text
        text={`Hello World ${user.name}`}
        fontFamily="Poppins-Thin"
        color={theme.colors.neutral_100}
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
