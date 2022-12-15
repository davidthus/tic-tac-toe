import { createSlice } from "@reduxjs/toolkit";

type CellValue = "O" | "X" | null;

interface boardSliceState {
  gameState: CellValue[];
  currentPlayer: "X" | "O";
  player1: "X" | "O";
  gameActive: boolean;
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
  gameActive: false,
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
      state = {
        gameState: Array(9).fill(null),
        currentPlayer: "X",
        gameActive: true,
        player1: action.payload.player1,
        score: {
          x: 0,
          ties: 0,
          o: 0,
        },
      };
    },

    // pseudo code
    /* 
      handle cell played 
      handle player change
      handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
}
      handle cell click
      handle restart game
    */
  },
});

export const { togglePlayer, setPlayer1, restartGame } = boardSlice.actions;
export default boardSlice.reducer;
