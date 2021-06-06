export type Square = 'X' | 'O' | null;
export type Board = Array<Square>;

export type SquareState = 'win' | 'draw' | null;
export type BoardState = Array<SquareState>;
