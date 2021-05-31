import React, { useReducer, useState } from 'react';
import { initState, boardReducer } from '../utils/board.reducer';
import styled from 'styled-components';
import { Board } from './Board';
import { calculateWinner } from 'src/utils/calculate-winner';

export const Game: React.FC = () => {
  const [board, dispatch] = useReducer(boardReducer, initState);
  const [isXTurn, setIsXTurn] = useState(false);
  const nextPlayer = () => setIsXTurn(!isXTurn);

  return (
    <Wrapper>
      <Board
        turn={isXTurn ? 'X' : 'O'}
        squares={board}
        winningSquares={calculateWinner(board)}
        selectAt={(idx) => {
          if (calculateWinner(board) || board[idx]) {
            return;
          }
          dispatch({ type: 'SELECT', move: isXTurn ? 'X' : 'O', idx: idx });
          nextPlayer();
        }}
      />
      {calculateWinner(board) && (
        <Button onClick={() => dispatch({ type: 'RESET' })}>Restart</Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  background: #f1f1f1;
`;

const Button = styled.button`
  font-family: monospace;
  font-size: 1.5rem;
  padding: 1rem;
`;
