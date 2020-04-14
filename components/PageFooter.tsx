import * as React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IconButton } from "components/Buttons";

interface PageFooterProps {}

export const PageFooter: React.FC<PageFooterProps> = () => (
  <Footer>
    <IconButton component="a" href="http://t.me/snelsi" target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane />
    </IconButton>

    <IconButton
      component="a"
      href="https://github.com/snelsi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.linkedin.com/in/roman-zhuravlov/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </IconButton>
  </Footer>
);

const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1em;
  width: 100%;

  & svg {
    color: var(--color-text-secondary);
  }
`;
