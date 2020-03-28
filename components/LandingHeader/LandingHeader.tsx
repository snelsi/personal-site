import * as React from "react";
import styled from "styled-components";
import { Background } from "components";
import { BottomLink, FadingTitles, Links } from "components/LandingHeader";
import Link from "next/link";

const LandingPage = styled.header`
  align-items: center;
  background: url(/images/HeroImage.jpg) center center / cover, #111;

  color: var(--color-text-white);
  display: flex;
  justify-content: center;
  height: 50vh;
  min-height: 300px;
  width: 100%;
  overflow: hidden;
`;

const Block = styled.div`
  text-align: center;
  padding: 0 20px;

  & h2.name {
    font-weight: 400;
  }
`;

interface LandingHeaderProps {}

export const LandingHeader: React.FC<LandingHeaderProps> = () => (
  <LandingPage>
    <Background>
      <Block>
        <h2 className="name">Roman Zhuravlov</h2>
        <FadingTitles />
      </Block>
      {/* <Links /> */}
      <BottomLinks>
        <Link href="/about">
          <BottomLink as="a" href="/about">
            Про Меня
          </BottomLink>
        </Link>
        <Link href="/about">
          <BottomLink as="a" href="/about">
            Мои Работы
          </BottomLink>
        </Link>
        <Link href="/about">
          <BottomLink as="a" href="/about">
            Контакты
          </BottomLink>
        </Link>
      </BottomLinks>
    </Background>
  </LandingPage>
);

const BottomLinks = styled.div`
  bottom: 24px;

  display: flex;
  justify-content: center;

  position: absolute;
  left: auto;
  right: auto;
`;
