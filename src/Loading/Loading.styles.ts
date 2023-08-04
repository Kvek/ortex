import { styled } from "styled-components";
import { device } from "../constants";

export const Container = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding-bottom: 1em;
    animation: pulse 1.2s infinite ease-in-out alternate;

    @keyframes pulse {
      from {
        transform: scale(0.75);
      }
      to {
        transform: scale(0.9);
      }
    }
  }
`;
