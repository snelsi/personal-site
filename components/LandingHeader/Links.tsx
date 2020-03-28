import * as React from "react";
import styled from "styled-components";
import { IconButton } from "components/Buttons/IconButton";

const LinksContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25em;
  position: absolute;
  top: 24px;
  right: 24px;
`;

const LinkIcon = styled(IconButton)`
  --base-color: 255, 255, 255;

  &:focus {
    box-shadow: 0 0 1px 2px white;
  }

  &:hover,
  &:focus,
  &:active {
    & img {
      opacity: 1;
    }
  }

  & > img {
    display: block;
    height: 100%;
    width: 100%;

    opacity: 0.3;
  }
`;

interface LinksProps {}

export const Links: React.FC<LinksProps> = () => (
  <LinksContainer>
    <LinkIcon as="a" href="https://t.me/snelsi" target="_blank" rel="noopener noreferrer">
      <img src="static/icons/telegramIcon.svg" alt="telegram" />
    </LinkIcon>
    <LinkIcon
      as="a"
      href="https://www.facebook.com/Snelsi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="static/icons/facebookIcon.svg" alt="facebook" />
    </LinkIcon>
    <LinkIcon
      as="a"
      href="https://www.linkedin.com/in/roman-zhuravlov/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="static/icons/linkedInIcon.svg" alt="linkedIn" />
    </LinkIcon>
    <LinkIcon
      as="a"
      href="https://github.com/snelsi/hangman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="static/icons/gitGubIcon.svg" alt="gitHub" />
    </LinkIcon>
  </LinksContainer>
);
