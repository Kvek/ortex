import styled from "styled-components/macro";
import { device } from "../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #ffffff24;
  padding: 1em;

  &.noData {
    border-bottom: none;
  }

  @media ${device.tablet} {
    margin: 0 1em;
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
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
  text-transform: capitalize;

  @media ${device.tablet} {
    background: #000;
    width: 400px;
    height: 450px;
    border-radius: 10px;
    padding: 1em;
    font-size: 0.9em;
    justify-content: space-evenly;
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
    padding-bottom: 1em;
  }
`;

export const Symbol = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Initials = styled.span`
  font-size: 0.8em;
  border-radius: 50%;
  border: 1px solid;
  user-select: none;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 10px;
`;

export const Currency = styled.span`
  font-size: 1.5em;
`;

export const Pill = styled.span`
  font-size: 0.65em;
  padding: 3px;
  border-radius: 4px;
  margin-left: 5px;

  &.increase {
    background-color: green;
  }

  &.decrease {
    background-color: red;
  }
`;

export const Price = styled.span`
  font-size: 2em;
  font-weight: 600;
  margin-right: 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
  color: rgba(255, 255, 255, 1);
`;

export const Time = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Time";
    }
  }
`;

export const Date = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Date";
    }
  }
`;

export const Timestamp = styled.span`
  font-size: 0.8em;
  text-transform: lowercase;

  @media ${device.tablet} {
    display: none;
  }
`;

export const PercentageChange = styled.span``;

export const PreviousValue = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Previous Value";
    }
  }
`;

export const MarketState = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Market State";
    }
  }
`;

export const MarketType = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Market Type";
    }
  }
`;

export const DailyHigh = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Daily High";
    }
  }
`;

export const DailyLow = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Daily Low";
    }
  }
`;

export const DayOpen = styled.span`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;

    &::before {
      user-select: none;
      content: "Open Price";
    }
  }
`;

export const Hr = styled.hr`
  display: none;

  @media ${device.tablet} {
    display: block;
    border: 1px solid #ffffff24;
    width: 100%;
  }
`;
