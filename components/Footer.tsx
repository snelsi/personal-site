import * as React from "react";
import styled from "styled-components";

import { ButtonText } from "components";
import { Header } from "components/Header";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const date = new Date();
  return (
    <FooterBase>
      <Content>
        <Header>
          <h4>Много ссылок</h4>
        </Header>
        <Links>
          <ButtonText
            as="a"
            href="https://github.com/snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ButtonText>
          <ButtonText
            as="a"
            href="https://www.facebook.com/Snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </ButtonText>
          <ButtonText as="a" href="http://t.me/snelsi" target="_blank" rel="noopener noreferrer">
            Telegram
          </ButtonText>
          <ButtonText
            as="a"
            href="https://www.linkedin.com/in/roman-zhuravlov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ButtonText>
          <ButtonText
            as="a"
            href="https://mykp.ru/snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kinopoisk
          </ButtonText>
          <ButtonText
            as="a"
            href="https://habr.com/ru/users/snelsi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Habr
          </ButtonText>
          <ButtonText
            as="a"
            href="https://www.codewars.com/users/snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeWars
          </ButtonText>
          <ButtonText
            as="a"
            href="https://www.twitch.tv/snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </ButtonText>
          <ButtonText
            as="a"
            href="https://steamcommunity.com/id/Snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steam
          </ButtonText>
          <ButtonText
            as="a"
            href="https://career.habr.com/snelsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Habr Карьера
          </ButtonText>
        </Links>
        <div className="copyright">
          Roman Zhuravlov
          <br />© 2019 - {date.getFullYear()}
        </div>
      </Content>
    </FooterBase>
  );
};

const FooterBase = styled.footer`
  border-top: 1px solid #e7e9f5;
  margin-top: 2em;
  padding: 0.5em var(--block-inner-padding) 1.25em;
  width: 100%;

  @media (max-width: 640px) {
    padding-bottom: 5em;
  }
`;

const Content = styled.div`
  margin: auto;
  max-width: 1080px;

  & > .copyright {
    margin-top: 1.25em;
    text-align: center;
    font-size: 1em;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  line-height: 1.5;
  grid-gap: 0.5em;
  margin: 1.25em 0;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
