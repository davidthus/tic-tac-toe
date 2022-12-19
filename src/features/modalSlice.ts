import { createSlice } from "@reduxjs/toolkit";

interface modalSliceState {
  type: "tie" | "restart" | "win";
  playerWon?: "X" | "O";
  modalIsOpen: boolean;
}

const initialState: modalSliceState = {
  type: "restart",
  modalIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      return {
        type: action.payload.type,
        modalIsOpen: true,
        playerWon: action.payload?.playerWon,
      };
    },
    closeModal: (state) => {
      return {
        type: "win",
        modalIsOpen: false,
      };
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
