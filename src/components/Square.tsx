import React, { useState } from 'react';
import { Square as SquareType, SquareState } from 'src/types';
import styled from 'styled-components';

interface Props {
  choice: SquareType;
  turn: 'X' | 'O';
  select: () => void;
  state: SquareState;
}

export const Square: React.FC<Props> = ({ choice, turn, select, state }) => {
  const [showTurn, setShowTurn] = useState(false);
  return (
    <Button
      onClick={select}
      onMouseEnter={() => setShowTurn(true)}
      onMouseLeave={() => setShowTurn(false)}
      state={state}
    >
      {showTurn && !choice ? turn : choice}
    </Button>
  );
};

const Button = styled.button<{ state: 'win' | 'draw' | null }>`
  text-align: center;
  padding: 0;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  margin: 0.2rem;
  font-size: 4rem;
  color: #2e2e2e;
  transition: 0.2s;
  background: ${({ state }) => {
    if (state === 'win') return '#a4ffca';
    if (state === 'draw') return '#f3ecc5';
    return '#fff';
  }};
  &:hover {
    background: #f0f0f0;
  }
  &:active {
    background: #e7e7e7;
  }
`;
