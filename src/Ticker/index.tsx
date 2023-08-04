import { useEffect, useState } from "react";
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
import { Loading } from "../Loading";

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
  "wss://stream.tradingeconomics.com/?client=guest:guest"
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
    return "";
  }
};

export const Ticker = () => {
  const [tickerData, setTickerData] = useState<PriceStreamData | null>();

  useEffect(() => {
    subject.next({ topic: "subscribe", to: subscribedExchange });

    subject.subscribe((msg) => {
      if ((msg as PriceStreamData).topic === subscribedExchange) {
        setTickerData(msg as PriceStreamData);
      }
    });

    () => {
      subject.unsubscribe();
    };
  }, []);

  return (
    <Container className={classNames({ ["noData"]: !tickerData })}>
      <CardContainer>
        <Card>
          {(() => {
            if (!tickerData) return <Loading />;

            const {
              s,
              pch,
              nch,
              price,
              dt,
              state,
              type,
              dhigh,
              dlow,
              o,
              prev,
            } = tickerData;

            return (
              <>
                <LogoContainer>
                  <Logo />
                </LogoContainer>

                <>
                  <PriceContainer>
                    {getInitials(s)}

                    <Symbol>
                      <Currency>{s}</Currency>

                      <PriceWrapper>
                        <Price>{price}</Price>
                        <span>
                          {percentageChange({ change: nch, percent: pch })}
                        </span>
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
                </>
              </>
            );
          })()}
        </Card>
      </CardContainer>
    </Container>
  );
};
