import * as React from "react";
import styled, { keyframes } from "styled-components";

import { slogans } from "./slogans";

const oneAnimationDuration = 3;
const animationDuration = oneAnimationDuration * slogans.length;

export const Title: React.FC = () => (
  <H1 className="montserrat">
    {slogans.map(({ top, bottom, emoji }, index) => (
      <FadingTitle key={top} delay={oneAnimationDuration * index}>
        <div>{top}</div>
        <div>
          {bottom} <span role="img">{emoji}</span>
        </div>
      </FadingTitle>
    ))}
  </H1>
);

const textFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  ${(oneAnimationDuration / animationDuration) * 25}% {
    opacity: 1;
    transform: translateY(0);
  }
  ${(oneAnimationDuration / animationDuration) * 100}% {
    opacity: 1;
    transform: translateY(0);
  }

  ${(oneAnimationDuration / animationDuration) * 125}% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 0;
  }
`;

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
    font-size: 8vw;
  }
  @media (max-width: 340px) {
    font-size: 24px;
  }
`;

interface FadingTitleProps {
  delay: number;
}
const FadingTitle = styled.span<FadingTitleProps>`
  animation: ${textFade} ${animationDuration}s ease-in-out 0s infinite;
  animation-fill-mode: both;
  display: block;
  text-align: left;
  animation-delay: ${({ delay = 0 }) => delay}s;

  grid-column: 1;
  grid-row: 1;

  font-size: inherit;

  & > div {
    white-space: nowrap;

    & > span {
      font-size: calc(1em - 6px);
    }
  }
`;
