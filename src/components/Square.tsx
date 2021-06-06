import React, { useState } from 'react';
import { Square as SquareType } from 'src/types';
import styled, { css } from 'styled-components';

interface Props {
  state: SquareType;
  turn: 'X' | 'O';
  select: () => void;
  winning: boolean;
}

export const Square: React.FC<Props> = ({ state, turn, select, winning }) => {
  const [showTurn, setShowTurn] = useState(false);
  return (
    <Button
      onClick={select}
      onMouseEnter={() => setShowTurn(true)}
      onMouseLeave={() => setShowTurn(false)}
      winning={winning}
    >
      {showTurn && !state ? turn : state}
    </Button>
  );
};

const Button = styled.button<{ winning: boolean }>`
  text-align: center;
  padding: 0;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  margin: 0.2rem;
  font-size: 4rem;
  color: #2e2e2e;
  transition: 0.2s;
  background: ${(props) => (props.winning ? '#a4ffca' : '#fff')};

  ${(props) =>
    !props.winning &&
    css`
      &:hover {
        background: #f0f0f0;
      }
    `}
`;
