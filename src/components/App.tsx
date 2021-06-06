import React from 'react';
import styled from 'styled-components';
import { Game } from './Game';

export const App: React.FC = () => (
  <Container>
    <Game />
  </Container>
);

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f1f1f1;
`;
