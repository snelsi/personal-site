import * as React from "react";
import styled from "styled-components";
import { useTime } from "scripts";

import { CardBase } from "components/Projects";

interface TimestampProps {}

export const Timestamp: React.FC<TimestampProps> = () => {
  const time = useTime();
  return (
    <Card href="https://timestamp.snelsi.now.sh/" target="_blank" rel="noopener noreferrer">
      <div className="title">Timestamp</div>
      <p>A calendar that will teach you to weight your time.</p>
      <div className="time">{time.toLocaleTimeString()}</div>
    </Card>
  );
};

const Card = styled(CardBase)`
  --text-color: rgba(0, 0, 0, 0.87);
  background: no-repeat url(images/projects/mementoMori.jpg), white;
  background-position: 80% 60%;
  background-size: 480px auto;

  & div.title {
    font-size: 60px;

    font-weight: 700;
    font-variation-settings: "wght" 700;
    text-transform: uppercase;
  }
  & p {
    color: var(--color-grey-8);
    font-size: 18px;
    margin: 32px 0;
    max-width: 260px;
  }
  & div.time {
    font-size: 24px;
    font-weight: 600;
    font-variation-settings: "wght" 600;
  }

  @media (max-width: 780px) {
    background-position: center 80%;
    background-size: 320px auto;
  }

  @media (max-width: 560px) {
    & div.title {
      font-size: 40px;
    }
  }
  @media (max-width: 340px) {
    & div.title {
      font-size: 32px;
    }
  }
`;
