import * as React from "react";
import styled from "styled-components";

import { slogans } from "./slogans";

export const Title: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setCurrent((curValue) => (curValue + 1 < slogans.length ? curValue + 1 : 0));
    }, 3400);
    return () => clearInterval(t);
  });

  return (
    <H1 className="montserrat">
      {slogans.map(({ top, bottom, emoji }, index) => (
        <div
          key={top}
          className="fading-title"
          data-current={index === current}
          data-next={(index + 1) % slogans.length === current}
        >
          <div>{top}</div>
          <div>
            {bottom} <span role="img">{emoji}</span>
          </div>
        </div>
      ))}
    </H1>
  );
};

const H1 = styled.h1`
  color: var(--color-text-main);
  align-items: center;
  display: grid;
  justify-content: left;
  user-select: none;

  font-size: 60px;

  @media (max-width: 1440px) {
    font-size: 4.5vw;
  }
  @media (max-width: 1020px) {
    font-size: 6.5vw;
  }
  @media (max-width: 640px) {
    font-size: 8.5vw;
  }
  @media (max-width: 340px) {
    font-size: 24px;
  }

  & .fading-title {
    display: block;
    text-align: left;

    grid-column: 1;
    grid-row: 1;

    font-size: inherit;

    & > div {
      white-space: nowrap;

      & > span {
        font-size: clamp(28px, 1em - 6px, 60px);
      }
    }

    transition: opacity 0.75s ease-in-out,
      transform 0.75s ease-in-out;
    &[data-current="true"] {
      opacity: 1;
      transform: translateY(0);
    }
    &[data-current="false"] {
      opacity: 0;
      transform: translateY(-20px);
    }
    &[data-next="true"] {
      transform: translateY(20px);
    }
  }
`;
