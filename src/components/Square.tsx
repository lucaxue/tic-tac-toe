import React from 'react';
import { Square as SquareType } from 'src/types';
import styled from 'styled-components';

interface Props {
  state: SquareType;
  turn: 'X' | 'O';
  select: () => void;
}

export const Square: React.FC<Props> = ({ state, turn, select }) => {
  return <Button onClick={select}>{state}</Button>;
};

const Button = styled.button`
  padding: 0;
`;
