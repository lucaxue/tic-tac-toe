import React from 'react';
import { Board as BoardType } from 'src/types';
import styled from 'styled-components';
import { Square } from './Square';

interface Props {
  turn: 'X' | 'O';
  squares: BoardType;
  winningSquares: number[] | 'draw' | null;
  selectAt: (idx: number) => void;
}

export const Board: React.FC<Props> = ({
  turn,
  squares,
  winningSquares,
  selectAt,
}) => {
  return (
    <Grid>
      {squares.map((square, idx) => (
        <Square
          key={idx}
          state={square}
          turn={turn}
          select={() => selectAt(idx)}
          winning={
            Array.isArray(winningSquares) && winningSquares.includes(idx)
          }
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  background: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 2px,
    #2e2e2e 2px,
    #2e2e2e 4px
  );
  padding: 0.5rem;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  width: 500px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
