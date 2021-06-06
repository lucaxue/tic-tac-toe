import React from 'react';
import { Board as BoardType, BoardState } from 'src/types';
import styled, { css } from 'styled-components';
import { Square } from './Square';

interface Props {
  turn: 'X' | 'O';
  gameIsConcluded: boolean;
  board: BoardType;
  boardState: BoardState;
  selectAt: (idx: number) => void;
}

export const Board: React.FC<Props> = ({
  turn,
  gameIsConcluded,
  board,
  boardState,
  selectAt,
}) => (
  <Grid disabled={gameIsConcluded}>
    {board.map((square, idx) => (
      <Square
        key={idx}
        choice={square}
        turn={turn}
        select={() => selectAt(idx)}
        state={boardState[idx]}
      />
    ))}
  </Grid>
);

const Grid = styled.div<{ disabled: boolean }>`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  background: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 2px,
    #2e2e2e 2px,
    #2e2e2e 4px
  );
  padding: 0.1rem;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  width: 350px;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`;
