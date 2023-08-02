import { styled } from "styled-components";
import { device } from "../constants";

export const Image = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 175px;
    user-select: none;

    @media ${device.mobile} {
      width: 150px;
    }

    &.logo {
      width: 60px;

      @media ${device.mobile} {
        width: 30px;
      }
    }
  }
`;
