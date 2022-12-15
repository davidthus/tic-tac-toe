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
  const state = useAppSelector((state) => state);

  return (
    <Wrapper>
      <IconWrapper>
        <CircleAndCross />
      </IconWrapper>
      <CurrentTurn>
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
        <p>X (YOU)</p>
        <Score>1</Score>
      </XWins>
      <Ties>
        <p>TIES</p>
        <Score>1</Score>
      </Ties>
      <OWins>
        <p>O (CPU)</p>
        <Score>2</Score>
      </OWins>
    </Wrapper>
  );
}

export default CPU;
