import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  max-height: 85px;
  height: 100%;
  box-sizing: border-box;

  label {
    font-size: 13px;
    color: rgb(136, 136, 136);
    text-transform: capitalize;
    margin-bottom: 8px;
    user-select: none;
  }

  input {
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: #fff;
    background: none;
    outline: none;
    border: none;
    padding-left: 5px;

    &::placeholder {
      font-size: 14px;
      opacity: 0.5;
    }
  }
`;

export const InputFieldContainer = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  height: 45px;
  border: 1px solid #ffffff24;
  border-radius: 10px;
  box-sizing: border-box;

  &.focus {
    border: 1px solid #ffffff82;
  }

  &.iconAfter {
    padding-right: 35px;
  }

  &.iconBefore {
    padding-left: 35px;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding: 0;
    margin: 0;
    fill: rgb(136, 136, 136);
  }

  &.before {
    left: 0;
  }

  &.after {
    right: 0;
    cursor: pointer;
  }
`;
