import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { ButtonText } from "components";

import StickyHeader from "react-headroom";

const HeaderStyles: React.CSSProperties = {
  zIndex: 100,
};
const wrapperStyle: React.CSSProperties = {
  backgroundColor: "var(--color-gray-9)",
};

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <StickyHeader
    style={HeaderStyles}
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

        <HeaderLink href="/about">Про меня</HeaderLink>
        <HeaderLink href="/articles">Блог</HeaderLink>
        <HeaderLink href="/projects">Резюме</HeaderLink>
        <HeaderLink href="/contacts">Контакты</HeaderLink>
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
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    & h5.name {
      font-weight: 600;
      margin-right: auto;
      padding: 0.5em 0;
      & a {
        color: var(--color-text-white);
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

const HeaderLinkContainer = styled.div`
  padding: 0.5em 0;
  & a {
    --base-color: 229, 224, 223;
    --text-color: var(--color-text-white);

    font-size: 1.125em;
    font-weight: 400;
    white-space: nowrap;

    &:not(:last-child) {
      margin-right: 4px;
    }
  }

  &[data-matched="true"] {
    border-bottom: 4px solid var(--color-blue-5);
    padding-bottom: calc(0.5em - 4px);
  }
`;

// border-bottom: 2px solid var(--color-blue-6);
interface HeaderLinkProps {
  href: string;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  const router = useRouter();
  return (
    <HeaderLinkContainer data-matched={href === router.route}>
      <Link href={href}>
        <ButtonText as="a" href={href}>
          {children}
        </ButtonText>
      </Link>
    </HeaderLinkContainer>
  );
};
