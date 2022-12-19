import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2.5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: uppercase;
  gap: 24px;
  @media (max-width: 500px) {
    font-size: 24px;
    gap: 5px;
  }
`;

export const GreyTitle = styled(Title)``;

export const BlueTitle = styled(Title)`
  color: rgb(49, 195, 189);
`;
export const YellowTitle = styled(Title)`
  color: rgb(242, 177, 55);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  border: 0px;
  border-radius: 10px;
  padding: 15px 17px 17px;
  color: rgb(26, 42, 51);
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.2s, transform 0.4s;
  display: block;
  text-decoration: none;
  text-align: center;
  &:active {
    transform: translateY(6px) scaleY(0.9);
    /* & p {
      transform: translateY(1px) scaleY(1.1);
    } */
  }
`;

export const QuitButton = styled(Button)`
  background: rgb(168, 191, 201);
  box-shadow: rgb(107, 137, 151) 0px -8px 0px inset;
  &:hover {
    background: rgb(219, 232, 237);
  }
`;

export const ContinueButton = styled(Button)`
  background: rgb(242, 177, 55);
  box-shadow: rgb(204, 139, 19) 0px -8px 0px inset;
  &:hover {
    background: rgb(255, 200, 96);
  }
`;
