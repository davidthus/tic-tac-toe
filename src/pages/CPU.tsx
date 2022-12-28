import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ReactComponent as CircleAndCross } from "../assets/CircleAndCross.svg";
import { ReactComponent as OFilled } from "../assets/O.svg";
import { ReactComponent as RestartIcon } from "../assets/Restart.svg";
import { ReactComponent as XFilled } from "../assets/X.svg";
import { addToScore, fillCell, togglePlayer } from "../features/boardSlice";
import { openModal } from "../features/modalSlice";
import {
  Cell,
  CurrentTurn,
  CurrentTurnSVG,
  HiddenLabel,
  IconWrapper,
  OWins,
  RestartButton,
  Score,
  SvgOutline,
  SvgOutlineWrapper,
  Ties,
  Wrapper,
  XWins,
} from "../styles/boardInterface";
import randomUnfilledCell from "../utils/randomUnfilledCell";

function CPU() {
  const dispatch = useAppDispatch();
  const { player1, gameState, score, currentPlayer } = useAppSelector(
    (state) => state.board
  );
  function handleRestart() {
    dispatch(openModal({ type: "restart" }));
  }

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

  useEffect(() => {
    let roundWon = false;
    for (let k = 0; k <= 7; k++) {
      const winCondition = winningConditions[k];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if (a === null || b === null || c === null) {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      switch (currentPlayer) {
        case "X":
          dispatch(addToScore({ score: "x" }));
          break;
        case "O":
          dispatch(addToScore({ score: "o" }));
      }
      dispatch(openModal({ type: "win", playerWon: currentPlayer }));
    } else if (!gameState.some((cell) => cell === null)) {
      dispatch(addToScore({ score: "ties" }));
      dispatch(openModal({ type: "tie" }));
    } else {
      // if game is empty and it is the cpus turn, fill a cell and toggleplayer()
      if (
        // expression is true if board is empty
        !gameState.some((cell) => cell !== null) &&
        currentPlayer !== player1
      ) {
        console.log("action 1");
        dispatch(
          fillCell({
            player: currentPlayer,
            index: randomUnfilledCell(gameState),
          })
        );
        console.log(gameState);
        dispatch(togglePlayer());
      } else if (
        !gameState.some((cell) => cell !== null) &&
        currentPlayer === player1
      ) {
        // if game is empty and it is the players turn, return
        console.log("action 2");
        return;
      } else if (currentPlayer === player1) {
        // if it is the players turn as he just went, switch to the cpu
        console.log("action 3");
        dispatch(togglePlayer());
        // fill a random cell for the cpu
        dispatch(
          fillCell({
            player: currentPlayer === "X" ? "O" : "X",
            index: randomUnfilledCell(gameState),
          })
        );
      } else if (currentPlayer !== player1) {
        // if it is the cpu's turn as it just went, toggle players
        console.log("action 4");
        dispatch(togglePlayer());
      }
    }
    console.log(gameState);
  }, [gameState]);

  return (
    <Wrapper>
      <IconWrapper>
        <CircleAndCross />
      </IconWrapper>
      <CurrentTurn>
        {currentPlayer === "X" && (
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
        )}
        {currentPlayer === "O" && (
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
      <RestartButton
        onClick={() => {
          dispatch(openModal({ type: "restart" }));
        }}
        type="button"
        aria-labelledby="restartLabel"
      >
        <HiddenLabel id="restartLabel">Restart</HiddenLabel>
        <i>
          <RestartIcon />
        </i>
      </RestartButton>
      {gameState.map((cell, i) => (
        <Cell
          key={i}
          filled={cell !== null}
          onClick={() => {
            if (cell !== null) return;
            if (currentPlayer !== player1) return;
            else {
              dispatch(fillCell({ player: currentPlayer, index: i }));
            }
          }}
        >
          <SvgOutlineWrapper cellFilled={cell !== null}>
            {currentPlayer === "X" && (
              <SvgOutline
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
                  stroke="rgb(49, 195, 189)"
                  strokeWidth="2"
                  fill="none"
                ></path>
              </SvgOutline>
            )}
            {currentPlayer === "O" && (
              <SvgOutline
                width="66"
                height="66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                  stroke="rgb(242, 177, 55)"
                  strokeWidth="2"
                  fill="none"
                ></path>
              </SvgOutline>
            )}
          </SvgOutlineWrapper>
          {cell === "X" && <XFilled />}
          {cell === "O" && <OFilled />}
        </Cell>
      ))}
      <XWins>
        <p>X {player1 === "X" ? "(P1)" : "(CPU)"}</p>
        <Score>{score.x}</Score>
      </XWins>
      <Ties>
        <p>TIES</p>
        <Score>{score.ties}</Score>
      </Ties>
      <OWins>
        <p>O {player1 === "O" ? "(P1)" : "(CPU)"}</p>
        <Score>{score.o}</Score>
      </OWins>
    </Wrapper>
  );
}

export default CPU;
