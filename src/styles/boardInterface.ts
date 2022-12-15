import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 460px;
  display: grid;
  grid-template: 52px repeat(3, 140px) 72px / repeat(3, 1fr);
  gap: 20px;
`;

export const IconWrapper = styled.aside`
  justify-self: start;
  align-self: center;
  display: flex;
`;

export const CurrentTurn = styled.span`
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(16, 33, 42) 0px -4px 0px inset;
  background: rgb(31, 54, 65);
  color: rgb(168, 191, 201);
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  padding-bottom: 5px;
  text-transform: uppercase;
  gap: 13px;
`;

export const CurrentTurnSVG = styled.svg`
  transform: scale(0.31);
  margin-right: -20px;
  margin-left: -23px;
  & path {
    fill: rgb(168, 191, 201);
  }
`;

export const RestartButton = styled.button`
  align-self: stretch;
  max-width: 52px;
  width: 100%;
  border: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 10px;
  background: rgb(168, 191, 201);
  box-shadow: rgb(107, 137, 151) 0px -4px 0px inset;
  cursor: pointer;
  font-weight: 700;
  justify-self: end;
  transition: transform 0.2s;
  &:active {
    transform: translateY(6px) scaleY(0.9);
    & i {
      transform: translateY(1px) scaleY(1.1);
    }
  }
`;

export const HiddenLabel = styled.span`
  display: none;
`;

export const Cell = styled.button`
  align-self: stretch;
  background: rgb(31, 54, 65);
  border-radius: 15px;
  box-shadow: rgb(16, 33, 42) 0px -8px 0px inset;
  border: 0px;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const ScoreInfo = styled.div`
  align-self: stretch;
  justiyf-self: stretch;
  border-radius: 15px;
  padding: 13px 0px 11px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

export const Score = styled.p`
  font-size: 24px;
`;

export const XWins = styled(ScoreInfo)`
  background: rgb(49, 195, 189);
`;
export const Ties = styled(ScoreInfo)`
  background: rgb(168, 191, 201);
`;
export const OWins = styled(ScoreInfo)`
  background: rgb(242, 177, 55);
`;
