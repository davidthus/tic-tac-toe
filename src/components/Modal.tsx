import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import RestartModal from "./RestartModal";
import TieModal from "./TieModal";
import WinModal from "./WinModal";

const Wrapper = styled.article`
  position: fixed;
  height: fit-content;
  width: 100%;
  background: rgb(31, 54, 65);
  top: 0px;
  bottom: 0px;
  margin: auto 0px;
  padding: 45px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: rgb(168, 191, 201);
  z-index: 100;
`;

function Modal() {
  const { modal } = useAppSelector((state) => state);

  return (
    <Wrapper>
      {modal.type === "tie" && <TieModal />}
      {modal.type === "win" && <WinModal />}
      {modal.type === "restart" && <RestartModal />}
    </Wrapper>
  );
}

export default Modal;
