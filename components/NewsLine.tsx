import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

const Wrapper = styled.div`
  align-items: center;
  background-color: var(--color-cool-gray-8);
  color: var(--color-gray-2);
  display: grid;
  font-size: 15px;

  gap: 14px;
  grid-auto-flow: column;

  height: 32px;
  justify-content: center;

  overflow-y: hidden;
  overflow-x: auto;

  white-space: nowrap;

  @media (max-width: 800px) {
    & .optional {
      display: none;
    }
  }

  & > a,
  & > button {
    background-color: var(--color-cool-gray-7);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    color: inherit;
    margin: 0 4px;
    outline: none;
    padding: 2px 8px;
    transition: var(--transition-ease);

    &:hover,
    &:focus {
      background-color: var(--color-cool-gray-6);
    }
    &:active {
      background-color: var(--color-cool-gray-9);
    }
  }
`;

interface NewsLineProps {}

export const NewsLine: React.FC<NewsLineProps> = () => {
  return null;
  // eslint-disable-next-line no-unreachable
  return (
    <Wrapper>
      I&apos;m available for work!{" "}
      <span role="img" aria-label="turtle with megaphone">
        📣🐢
      </span>
      <div className="optional"> Contact me if you are interested.</div>{" "}
      <Link href="/contact">
        <a href="/contact">Contact</a>
      </Link>
    </Wrapper>
  );
};
