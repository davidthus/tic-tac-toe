import { createSlice } from "@reduxjs/toolkit";

export type CellValue = "O" | "X" | null;

interface boardSliceState {
  gameState: CellValue[];
  currentPlayer: "X" | "O";
  player1: "X" | "O";
  score: {
    x: number;
    ties: number;
    o: number;
  };
}

const initialState: boardSliceState = {
  gameState: Array(9).fill(null),
  currentPlayer: "X",
  player1: "X",
  score: {
    x: 0,
    ties: 0,
    o: 0,
  },
};

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    togglePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    setPlayer1: (state, action) => {
      state.player1 = action.payload.player1;
    },
    restartGame: (state, action) => {
      return {
        gameState: Array(9).fill(null),
        currentPlayer: "X",
        player1: action.payload.player1,
        score: {
          x: 0,
          ties: 0,
          o: 0,
        },
      };
    },
    fillCell: (state, action) => {
      const { index, player } = action.payload;
      state.gameState.splice(index, 1, player);
    },
    newRound: (state) => {
      return {
        gameState: Array(9).fill(null),
        currentPlayer: "X",
        player1: state.player1,
        score: state.score,
      };
    },
    addToScore: (state, action: { payload: { score: "o" | "x" | "ties" } }) => {
      state.score[action.payload.score] += 1;
    },
  },
});

export const {
  togglePlayer,
  setPlayer1,
  restartGame,
  fillCell,
  addToScore,
  newRound,
} = boardSlice.actions;
export default boardSlice.reducer;
