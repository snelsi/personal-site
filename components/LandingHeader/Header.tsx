import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ButtonText } from "components";

import StickyHeader from "react-headroom";

const wrapperStyle: React.CSSProperties = {
  backgroundColor: "var(--color-gray-9)",
};

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <StickyHeader
    style={{ zIndex: 100 }}
    upTolerance={20}
    downTolerance={20}
    pinStart={62}
    wrapperStyle={wrapperStyle}
  >
    <Container>
      <div>
        <h5 className="name">
          <Link href="/">
            <a href="/">Roman Zhuravlov</a>
          </Link>
        </h5>

        <Link href="/about">
          <StyledButtonText as="a" href="/about">
            Про меня
          </StyledButtonText>
        </Link>
        <Link href="/projects">
          <StyledButtonText as="a" href="/projects">
            Проекты
          </StyledButtonText>
        </Link>
        <Link href="/">
          <StyledButtonText as="a" href="/">
            Контакты
          </StyledButtonText>
        </Link>
      </div>
    </Container>
  </StickyHeader>
);

const Container = styled.div`
  background-color: var(--color-gray-9);
  overflow: auto;
  padding: 0 20px;
  width: 100%;
  z-index: 100;

  & > div {
    color: var(--color-text-white);
    margin: auto;
    padding: 0.5em 0;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    & h5.name {
      font-weight: 600;
      margin-right: auto;
      & a {
        color: var(--color-text-white);
      }
    }

    & > a {
      color: var(--color-text-white);
      font-size: 1.125em;
      font-weight: 400;
      white-space: nowrap;
      &:hover,
      &:focus,
      &:active {
        color: var(--color-text-white);
      }

      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }

  @media (max-width: 720px) {
    padding: 0;

    & > div {
      width: fit-content;

      & .name {
        display: none;
      }
    }
  }
`;

const StyledButtonText = styled(ButtonText)`
  --base-color: 229, 224, 223;

  color: var(--color-gray-2);
`;
