import React from 'react';
import { Board as BoardType } from 'src/types';
import styled from 'styled-components';
import { Square } from './Square';

interface Props {
  turn: 'X' | 'O';
  squares: BoardType;
  selectAt: (idx: number) => void;
}

export const Board: React.FC<Props> = ({ turn, squares, selectAt }) => {
  return (
    <Grid>
      {squares.map((square, idx) => (
        <Square
          key={idx}
          state={square}
          turn={turn}
          select={() => selectAt(idx)}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 10rem;
  height: 10rem;
`;
