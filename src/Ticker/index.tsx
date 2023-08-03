import React, { useEffect } from "react";
import { webSocket } from "rxjs/webSocket";
import { Card, Container, CardContainer } from "./Ticker.styles";

const subject = webSocket(
  "ws://stream.tradingeconomics.com/?client=guest:guest"
);

// type PriceStreamData = {
//   dhigh: number;
//   dlow: number;
//   dt: number;
//   nch: number;
//   o: number;
//   pch: number;
//   prev: number;
//   price: number;
//   s: string;
//   snapshot: boolean;
//   state: string;
//   topic: string;
//   type: string;
// };

export const Ticker = () => {
  useEffect(() => {
    subject.next({ topic: "subscribe", to: "EURUSD:CUR" });

    subject.subscribe({
      next: (msg) => console.log(msg), // Called whenever there is a message from the server.
      error: (err) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log("complete"), // Called when connection is closed (for whatever reason).
    });
  }, []);

  return (
    <Container>
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  );
};
