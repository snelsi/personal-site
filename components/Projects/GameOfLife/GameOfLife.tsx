import * as React from "react";
import styled from "styled-components";

import { CardBase } from "components/Projects";

interface GameOfLifeProps {}

export const GameOfLife: React.FC<GameOfLifeProps> = () => (
  <Card href="https://gameoflife.snelsi.now.sh/" target="_blank" rel="noopener noreferrer">
    <div className="title">The Game of Life</div>
    <video autoPlay loop controls={false}>
      <source src="images/projects/glider.mp4" type="video/mp4" />
    </video>
  </Card>
);

const Card = styled(CardBase)`
  --text-color: var(--color-green-4);
  background-color: var(--color-teal-2);

  & div.title {
    font-size: 42px;

    font-weight: 700;
    font-variation-settings: "wght" 700;
    text-transform: uppercase;
  }

  & video {
    border-radius: 1rem;
    position: absolute;
    right: 4em;
    bottom: auto;
    top: auto;

    height: 320px;
    width: 320px;
  }
  @media (max-width: 720px) {
    & div.title {
      font-size: 24px;
    }
    & video {
      height: 260px;
      width: 260px;
      right: auto;
      left: auto;
      margin: auto;
    }
  }
`;
