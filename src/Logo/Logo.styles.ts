import styled from "styled-components/macro";
import { device } from "../constants";

export const Image = styled.div`
  display: flex;
  align-items: center;

  img {
    user-select: none;
    width: 150px;

    @media ${device.tablet} {
      width: 175px;
    }

    &.logo {
      width: 30px;

      @media ${device.tablet} {
        width: 60px;
      }
    }
  }
`;
