import styled from "styled-components/macro";
import { device } from "./constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgb(0, 0, 0);
  min-width: 375px;

  @media ${device.tablet} {
    background: none;
    min-width: 1024px;
  }
`;

export const AppHeader = styled.header`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid #ffffff24;
  min-height: 65px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
