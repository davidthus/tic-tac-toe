import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../features/boardSlice";
import modalSlice from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    board: boardSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
