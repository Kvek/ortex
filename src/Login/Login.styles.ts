import { styled } from "styled-components";
import { device } from "../constants";

type ButtonProps = {
  $buttonType?: "primary" | "error" | "disabled";
};

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const LoginFormWrapper = styled.div`
  width: 450px;

  @media ${device.mobile} {
    width: 100%;
    height: 420px;
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ffffff24;
  padding: 1em;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-height: 60px;
  border-radius: 10px;
  padding: 1em 0;
  color: rgb(136, 136, 136, 0.6);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  overflow: hidden;

  div {
    transition: max-height 0.15s linear;

    &.showPasswordInput {
      max-height: 85px;
      visibility: visible;
    }

    &.hidePasswordInput {
      max-height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1em 0;
`;

export const Button = styled.button<ButtonProps>`
  font-size: 14px;
  border: 1px solid #ffffff24;
  background: none;
  color: rgba(255, 255, 255, 1);
  min-width: 150px;
  max-width: 300px;
  width: 100%;
  padding: 10px;
  margin: 10px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    margin: 0 5px;
    fill: rgba(255, 255, 255, 1);
  }

  ${({ $buttonType = "primary" }) => {
    if ($buttonType === "primary") {
      return `
        background: #34b0abd1;

        svg {
          fill: #fff;
        }

        &:hover {
          background: #34B0AB;
        }
      `;
    }

    if ($buttonType === "error") {
      return `
        background: #cc0000cf;
        color: #fff;
        -webkit-tap-highlight-color: transparent;

        svg {
          fill: #fff;
        }

        &:hover {
          background: #cc0000;
        }
      `;
    }

    if ($buttonType === "disabled") {
      return `
        pointer-events: none; 
        cursor: default;
        color: rgba(255, 255, 255, 0.5);
        -webkit-tap-highlight-color: transparent;

        svg {
          fill: rgba(255, 255, 255, 0.5);
        }

        &:hover {
          background: none;
        }
      `;
    }
  }}

  @media ${device.mobile} {
    max-width: 200px;
  }
`;
