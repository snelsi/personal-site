import * as React from "react";
import styled from "styled-components";

import { CardBase } from "components/Projects";
import { BubblesBackground, StartMenu } from "components/Projects/Hangman";

interface HangmanProps {}

export const Hangman: React.FC<HangmanProps> = () => (
  <Card href="https://hangman.snelsi.now.sh/" target="_blank" rel="noopener noreferrer">
    <BubblesBackground>
      <StartMenu />
    </BubblesBackground>
  </Card>
);

const Card = styled(CardBase)`
  --text-color: white;
  background-color: #4e54c8;
  padding: 0 !important;

  & > div {
    padding: 2rem 1rem;
  }
`;
