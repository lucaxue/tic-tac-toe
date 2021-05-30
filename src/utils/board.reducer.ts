import { Board } from '../types';

type Action =
  | { type: 'SELECT'; move: 'X' | 'O'; idx: number }
  | { type: 'RESET' };

export const initState: Board = new Array(9).fill(null);

export function boardReducer(state: Board, action: Action) {
  switch (action.type) {
    case 'SELECT':
      return [
        ...state.slice(0, action.idx),
        action.move,
        ...state.slice(action.idx + 1),
      ];
    case 'RESET':
      return initState;
    default:
      return state;
  }
}
