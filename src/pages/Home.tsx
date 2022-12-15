import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ReactComponent as CircleAndCross } from "../assets/CircleAndCross.svg";
import { setPlayer1 } from "../features/boardSlice";

const Container = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const ChoosePlayerWrapper = styled.section`
  width: 100%;
  padding: 24px 24px 30px;
  background: rgb(31, 54, 65);
  border-radius: 15px;
  color: rgb(168, 191, 201);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  box-shadow: rgb(16, 33, 42) 0px -8px 0px inset;
  margin-bottom: 40px;
`;

export const HiddenLabel = styled.span`
  display: none;
`;

const ToggleWrapper = styled.button`
  height: 72px;
  background: rgb(26, 42, 51);
  padding: 9px;
  border-radius: 10px;
  display: flex;
  margin: 24px 0px 17px;
  border: none;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

const Toggle = styled.div`
  width: calc(50% - 9px);
  position: absolute;
  border: 0px;
  background: rgb(168, 191, 201);
  height: calc(100% - 18px);
  border-radius: 10px;
  transition: 0.4s;
  top: 9px;
  /* idk how i make this smooth ass animation but at least it works */
  left: ${({ active }: { active: boolean }) => (active ? "9px" : "auto")};
  transform: translateX(
    ${({ active }: { active: boolean }) => (active ? "0" : "100%")}
  );
`;

const ToggleOption = styled.div`
  font-family: inherit;
  height: 100%;
  width: 50%;
  border-radius: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    scale: 0.5;
    & path {
      /* change colour of svg based on if the player option is X or not */
      fill: ${({ active }: { active: boolean }) =>
        active ? "rgb(26, 42, 51)" : "rgb(168, 191, 201)"};
    }
  }
`;

const SecondaryText = styled.p`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
`;

const GameModesWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GameModeButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 15px;
  color: rgb(26, 42, 51);
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
  padding: 17px 15px 25px;
  letter-spacing: 1.25px;
  cursor: pointer;
  transition: background 0.4s, transform 0.2s;
  display: block;
  text-decoration: none;
  text-align: center;
  &:active {
    transform: translateY(4px) scaleY(0.93);
    & p {
      transform: translateY(1px) scaleY(1.07);
    }
  }
`;

const CPUButton = styled(GameModeButton)`
  background: rgb(242, 177, 55);
  box-shadow: rgb(204, 139, 19) 0px -8px 0px inset;
  &:hover {
    background: rgb(255, 200, 96);
  }
`;

const PlayerButton = styled(GameModeButton)`
  background: rgb(49, 195, 189);
  box-shadow: rgb(17, 140, 135) 0px -8px 0px inset;
  &:hover {
    background: rgb(101, 233, 228);
  }
`;

function Home() {
  const dispatch = useAppDispatch();
  const { player1 } = useAppSelector((state) => state.board);

  return (
    <Container>
      <Header>
        <CircleAndCross />
      </Header>
      <ChoosePlayerWrapper>
        <p>PICK PLAYER 1’S MARK</p>
        <ToggleWrapper
          type="button"
          aria-labelledby="toggleLabel"
          onClick={() => {
            if (player1 === "X") dispatch(setPlayer1({ player1: "O" }));
            else dispatch(setPlayer1({ player1: "X" }));
          }}
        >
          <Toggle active={player1 === "X" && true} />
          <ToggleOption active={player1 === "X" && true}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="rgb(168, 191, 201)"
                fillRule="evenodd"
              ></path>
            </svg>
          </ToggleOption>
          <ToggleOption active={player1 !== "X" && true}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="rgb(168, 191, 201)"
              ></path>
            </svg>
          </ToggleOption>
          <HiddenLabel id="toggleLabel">Toggle</HiddenLabel>
        </ToggleWrapper>
        <SecondaryText>REMEMBER: X GOES FIRST</SecondaryText>
      </ChoosePlayerWrapper>
      <GameModesWrapper>
        <Link to="/cpu" style={{ textDecoration: "none" }}>
          <CPUButton>
            <p>NEW GAME (VS CPU)</p>
          </CPUButton>
        </Link>
        <Link to="/player" style={{ textDecoration: "none" }}>
          <PlayerButton>
            <p>NEW GAME (VS PLAYER)</p>
          </PlayerButton>
        </Link>
      </GameModesWrapper>
    </Container>
  );
}

export default Home;
