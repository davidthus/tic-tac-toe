import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { newRound, restartGame } from "../features/boardSlice";
import { closeModal } from "../features/modalSlice";
import {
  ButtonsWrapper,
  ContinueButton,
  GreyTitle,
  QuitButton,
} from "../styles/modalInterface";

function TieModal() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <GreyTitle>ROUND TIED</GreyTitle>
      <ButtonsWrapper>
        <QuitButton
          onClick={() => {
            dispatch(restartGame({ player1: board.player1 }));
            dispatch(closeModal());
            navigate("/");
          }}
        >
          QUIT
        </QuitButton>
        <ContinueButton
          onClick={() => {
            dispatch(closeModal());
            dispatch(newRound());
          }}
        >
          NEXT ROUND
        </ContinueButton>
      </ButtonsWrapper>
    </>
  );
}

export default TieModal;
