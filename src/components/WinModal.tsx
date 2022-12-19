import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ReactComponent as O } from "../assets/O.svg";
import { ReactComponent as X } from "../assets/X.svg";
import { newRound, restartGame } from "../features/boardSlice";
import { closeModal } from "../features/modalSlice";
import {
  BlueTitle,
  ButtonsWrapper,
  ContinueButton,
  QuitButton,
  YellowTitle,
} from "../styles/modalInterface";
import { useMatchMedia } from "../utils/useMatchMedia";

const SmallSvg = styled.svg`
  transform: scale(0.47);
`;

function WinModal() {
  const dispatch = useAppDispatch();
  const { isMobileSize } = useMatchMedia();
  const { board, modal } = useAppSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      {modal.playerWon === board.player1 ? (
        <p>PLAYER 1 WINS!</p>
      ) : (
        <p>PLAYER 2 WINS!</p>
      )}
      {board.currentPlayer === "X" && (
        <BlueTitle>
          {isMobileSize ? (
            <SmallSvg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="rgb(49, 195, 189)"
                fillRule="evenodd"
              ></path>
            </SmallSvg>
          ) : (
            <X />
          )}{" "}
          TAKES THE ROUND
        </BlueTitle>
      )}
      {board.currentPlayer === "O" && (
        <YellowTitle>
          {isMobileSize ? (
            <SmallSvg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="rgb(242, 177, 55)"
              ></path>
            </SmallSvg>
          ) : (
            <O />
          )}{" "}
          TAKES THE ROUND
        </YellowTitle>
      )}
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

export default WinModal;
