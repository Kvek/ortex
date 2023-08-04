import React, { useEffect, useState } from "react";
import { webSocket } from "rxjs/webSocket";
import {
  Card,
  Container,
  CardContainer,
  Symbol,
  Price,
  Time,
  PreviousValue,
  MarketState,
  MarketType,
  DailyHigh,
  DailyLow,
  DayOpen,
  Pill,
  Initials,
  PriceContainer,
  Currency,
  PriceWrapper,
  Date,
  Hr,
  Timestamp,
  LogoContainer,
} from "./Ticker.styles";
import classNames from "classnames";
import { format } from "date-fns";
import { Logo } from "../Logo";

const subscribedExchange = "EURUSD:CUR";

type PriceStreamData = {
  dhigh: number;
  dlow: number;
  dt: number;
  nch: number;
  o: number;
  pch: number;
  prev: number;
  price: number;
  s: string;
  state: string;
  type: string;
  topic: string;
};

const subject = webSocket(
  "ws://stream.tradingeconomics.com/?client=guest:guest"
);

const percentageChange = ({
  change,
  percent,
}: {
  change: number;
  percent: number;
}) => {
  try {
    return (
      <Pill
        className={classNames({
          ["increase"]: change >= 0,
          ["decrease"]: change < 0,
        })}
      >
        {change >= 0 ? <>&#9650;</> : <>&#9660;</>} {change} ({percent}%)
      </Pill>
    );
  } catch (error) {
    return "";
  }
};

const getInitials = (curreny: string) => {
  try {
    const base = curreny[0];
    const other = curreny[3];

    return (
      <Initials>
        {base}
        {other}
      </Initials>
    );
  } catch (error) {
    return "";
  }
};

const getFormattedTime = (date: number, formatStr: "Pp" | "p" | "P") => {
  try {
    return format(date, formatStr);
  } catch (error) {
    console.error(error);
    console.log("date", date);
    return "";
  }
};

export const Ticker = () => {
  const [tickerData, setTickerData] = useState<PriceStreamData>({
    s: "",
    pch: 0,
    nch: 0,
    price: 0,
    dt: 0,
    state: "",
    type: "",
    dhigh: 0,
    dlow: 0,
    o: 0,
    prev: 0,
    topic: "",
  });

  useEffect(() => {
    subject.next({ topic: "subscribe", to: subscribedExchange });

    subject.subscribe((msg) => {
      if ((msg as PriceStreamData).topic === subscribedExchange) {
        setTickerData(msg as PriceStreamData);
      }
    });
  }, []);

  const { s, pch, nch, price, dt, state, type, dhigh, dlow, o, prev } =
    tickerData;
  return (
    <Container>
      <CardContainer>
        <Card>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <PriceContainer>
            {getInitials(s)}

            <Symbol>
              <Currency>{s}</Currency>

              <PriceWrapper>
                <Price>{price}</Price>
                <span>{percentageChange({ change: nch, percent: pch })}</span>
              </PriceWrapper>

              <Timestamp>{getFormattedTime(dt, "Pp")}</Timestamp>
            </Symbol>
          </PriceContainer>
          <Date>{getFormattedTime(dt, "P")}</Date>
          <Hr />
          <Time>{getFormattedTime(dt, "p")}</Time> <Hr />
          <PreviousValue>{prev}</PreviousValue> <Hr />
          <MarketState>{state}</MarketState> <Hr />
          <MarketType>{type}</MarketType> <Hr />
          <DailyHigh>{dhigh}</DailyHigh> <Hr />
          <DailyLow>{dlow}</DailyLow> <Hr />
          <DayOpen>{o}</DayOpen>
        </Card>
      </CardContainer>
    </Container>
  );
};
