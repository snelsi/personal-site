import * as React from "react";
import styled from "styled-components";

import { ButtonText, Header } from "components";

interface LinksBlockProps {}

export const LinksBlock: React.FC<LinksBlockProps> = () => (
  <div data-fix-width>
    <Header>
      <h4>Много ссылок</h4>
    </Header>
    <Links>
      <ButtonText
        component="a"
        href="https://github.com/snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </ButtonText>
      <ButtonText
        component="a"
        href="https://www.linkedin.com/in/roman-zhuravlov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </ButtonText>
      <ButtonText
        component="a"
        href="https://www.facebook.com/Snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </ButtonText>
      <ButtonText component="a" href="http://t.me/snelsi" target="_blank" rel="noopener noreferrer">
        Telegram
      </ButtonText>

      <ButtonText
        component="a"
        href="https://habr.com/ru/users/snelsi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Habr
      </ButtonText>
      <ButtonText
        component="a"
        href="https://www.codewars.com/users/snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        CodeWars
      </ButtonText>
      <ButtonText
        component="a"
        href="https://career.habr.com/snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Habr Карьера
      </ButtonText>

      <ButtonText
        component="a"
        href="https://mykp.ru/snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kinopoisk
      </ButtonText>
      <ButtonText
        component="a"
        href="https://www.twitch.tv/snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitch
      </ButtonText>
      <ButtonText
        component="a"
        href="https://steamcommunity.com/id/Snelsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Steam
      </ButtonText>
    </Links>
  </div>
);

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  line-height: 1.5;
  grid-gap: 0.5em;

  margin-top: 1.25em;
  margin-bottom: 1.25em;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
