import styled from "styled-components/macro";
import { device } from "../constants";

type ButtonProps = {
  $buttonType?: "primary" | "error" | "disabled";
};

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.95);
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    flex: 1;
  }
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1em;

  @media ${device.tablet} {
    height: 450px;
    width: 400px;
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;
  border-radius: 10px;
  box-sizing: border-box;
  height: 100%;
  box-shadow: none;

  @media ${device.tablet} {
    box-shadow: 0 0 1px 1px #ffffff24;
  }
`;

export const LogoContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60px;
    min-height: 60px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  flex: 2;
  justify-content: center;

  @media ${device.tablet} {
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
  color: rgba(255, 255, 255);
  min-width: 150px;
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

  &.continue {
    display: none;

    @media ${device.tablet} {
      display: flex;
    }
  }

  &.showLogin {
    @media ${device.tablet} {
      display: none;
    }
  }

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
`;

export const MessageContainer = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-transform: capitalize;
`;
