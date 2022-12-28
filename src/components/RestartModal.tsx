import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { restartGame } from "../features/boardSlice";
import { closeModal } from "../features/modalSlice";
import {
  ButtonsWrapper,
  ContinueButton,
  GreyTitle,
  QuitButton,
} from "../styles/modalInterface";

function RestartModal() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state);

  return (
    <>
      <GreyTitle>RESTART GAME</GreyTitle>
      <ButtonsWrapper>
        <QuitButton
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          NO, CANCEL
        </QuitButton>
        <ContinueButton
          onClick={() => {
            dispatch(restartGame({ player1: board.player1 }));
            dispatch(closeModal());
          }}
        >
          YES, RESTART
        </ContinueButton>
      </ButtonsWrapper>
    </>
  );
}

export default RestartModal;
