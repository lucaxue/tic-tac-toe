import React, { useReducer, useState } from 'react';
import { initState, boardReducer } from '../utils/board.reducer';
import styled from 'styled-components';
import { Board } from './Board';
import { calculateWinner } from 'src/utils/calculate-winner';

export const Game: React.FC = () => {
  const [board, dispatch] = useReducer(boardReducer, initState);
  const [isXTurn, setIsXTurn] = useState(true);
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
      <Status>
        {!calculateWinner(board) ? (
          <Text>{isXTurn ? 'X Turn' : 'O Turn'}</Text>
        ) : (
          <Button onClick={() => dispatch({ type: 'RESET' })}>Restart</Button>
        )}
      </Status>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 2rem;
  grid-template-rows: 3fr, 1fr;
`;

const Status = styled.div`
  width: calc(350px - 0.5rem);
  padding: 0.3rem;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  background: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 2px,
    #2e2e2e 2px,
    #2e2e2e 4px
  );
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  margin: 0;
  font-size: 2rem;
  padding: 1rem 0;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #2e2e2e;
`;

const Button = styled.button`
  padding: 1rem 0;
  font-size: 2rem;
  background: #fff;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #2e2e2e;
`;
