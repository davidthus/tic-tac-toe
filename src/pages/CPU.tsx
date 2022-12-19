import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ReactComponent as CircleAndCross } from "../assets/CircleAndCross.svg";
import { ReactComponent as RestartIcon } from "../assets/Restart.svg";
import {
  Cell,
  CurrentTurn,
  CurrentTurnSVG,
  HiddenLabel,
  IconWrapper,
  OWins,
  RestartButton,
  Score,
  Ties,
  Wrapper,
  XWins,
} from "../styles/boardInterface";

function CPU() {
  const [boardCells, setBoardCells] = useState(Array(9).fill(null));
  const { board } = useAppSelector((state) => state);

  return (
    <Wrapper>
      <IconWrapper>
        <CircleAndCross />
      </IconWrapper>
      <CurrentTurn>
        {board.currentPlayer === "X" ? (
          <CurrentTurnSVG
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
              fill="rgb(168, 191, 201)"
              fillRule="evenodd"
            ></path>
          </CurrentTurnSVG>
        ) : (
          <CurrentTurnSVG
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
              fill="rgb(168, 191, 201)"
            ></path>
          </CurrentTurnSVG>
        )}
        turn
      </CurrentTurn>
      <RestartButton type="button" aria-labelledby="restartLabel">
        <HiddenLabel id="restartLabel">Restart</HiddenLabel>
        <i>
          <RestartIcon />
        </i>
      </RestartButton>
      {boardCells.map((cell, i) => (
        <Cell key={i}></Cell>
      ))}
      <XWins>
        <p>X {board.player1 === "X" ? "(YOU)" : "(CPU)"}</p>
        <Score>{board.score.x}</Score>
      </XWins>
      <Ties>
        <p>TIES</p>
        <Score>{board.score.ties}</Score>
      </Ties>
      <OWins>
        <p>O {board.player1 === "O" ? "(YOU)" : "(CPU)"}</p>
        <Score>{board.score.o}</Score>
      </OWins>
    </Wrapper>
  );
}

export default CPU;
