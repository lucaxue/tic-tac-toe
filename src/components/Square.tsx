import React from 'react';
import { Square as SquareType } from 'src/types';
import styled from 'styled-components';

interface Props {
  state: SquareType;
  turn: 'X' | 'O';
  select: () => void;
  winning: boolean;
}

export const Square: React.FC<Props> = ({ state, turn, select, winning }) => {
  return (
    <Button onClick={select} winning={winning}>
      {state}
    </Button>
  );
};

const Button = styled.button<{ winning: boolean }>`
  text-align: center;
  padding: 0;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  margin: 0.5rem;
  font-family: monospace;
  color: #2e2e2e;
  font-size: 5rem;
  background: ${(props) => (props.winning ? '#a4ffca' : '#fff')};
`;
