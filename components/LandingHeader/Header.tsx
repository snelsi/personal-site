import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ButtonText } from "components";

import StickyHeader from "react-headroom";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <StickyHeader style={{ zIndex: 100 }} upTolerance={20} downTolerance={20}>
    <Container>
      <div className="logo">
        <img src="favicon-32x32.png" alt="My logo" />
        <h5>Roman Zhuravlov</h5>
      </div>
      <div className="links">
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
  color: var(--color-text-white);
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;

  overflow: auto;

  & .logo {
    display: flex;
    align-items: center;
    margin-right: 2em;

    h5 {
      font-weight: 400;
    }
    & img {
      /* cursor: pointer; */
      margin-right: 1em;
      transition: var(--transition-ease);

      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
  & .links {
    display: flex;
    & > a {
      color: var(--color-text-white);
      font-size: 1.15em;
      white-space: nowrap;

      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }

  @media (max-width: 720px) {
    /* position: sticky; */
    justify-content: center;

    & .logo {
      display: none;
    }
    & .links {
      & > a {
        width: auto;
      }
    }
  }
`;

const StyledButtonText = styled(ButtonText)`
  --base-color: 229, 224, 223;

  color: var(--color-gray-2);
`;
