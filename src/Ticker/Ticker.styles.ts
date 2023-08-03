import styled from "styled-components/macro";
import { device } from "../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid #ffffff24;
  padding: 1em;
  box-sizing: border-box;

  @media ${device.tablet} {
    background: #ffffff24;
    flex: 1;
    height: 100%;
    padding: 0;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    background: #000;
    width: 400px;
    height: 450px;
    border-radius: 10px;
  }
`;
