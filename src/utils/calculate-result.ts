import { Board, BoardState } from '../types';

export function calculateResult(board: Board): BoardState {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return Array(9)
        .fill(null)
        .map((_, idx) => (combo.includes(idx) ? 'win' : null));
    }
  }

  if (board.every((square) => square !== null)) {
    return Array(9).fill('draw');
  }

  return Array(9).fill(null);
}
