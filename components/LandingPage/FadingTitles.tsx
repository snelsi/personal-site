import * as React from "react";
import styled, { keyframes } from "styled-components";

const titles = [
  "Modern Web Sites",
  "Beautiful Interfaces",
  "Creative Design",
  "Elegant Solutions",
  "Latest Technologies",
  "Enterprise Systems", // meh
  "Smart Code",
];

const oneAnimationDuration = 2;
const animationDuration = oneAnimationDuration * titles.length;

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

const FadingTitleContainer = styled.h1`
  align-items: center;
  display: grid;
  justify-content: center;
  font-weight: 600;
  height: 2em;
  user-select: none;
  width: 100vw;
`;

interface FadingTitleProps {
  delay: number;
}
const FadingTitle = styled.span<FadingTitleProps>`
  animation: ${textFade} ${animationDuration}s ease-in-out 0s infinite;
  animation-fill-mode: both;
  display: block;
  text-align: center;
  animation-delay: ${({ delay = 0 }) => delay}s;

  grid-column: 1;
  grid-row: 1;
`;

interface FadingTitlesProps {}

export const FadingTitles: React.FC<FadingTitlesProps> = () => (
  <FadingTitleContainer>
    {titles.map((title, index) => (
      <FadingTitle key={title} delay={oneAnimationDuration * index}>
        {title}
      </FadingTitle>
    ))}
  </FadingTitleContainer>
);
