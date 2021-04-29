import * as React from "react";
import styled from "styled-components";

import { BubblesBackground } from "components";
import { Buttons, HeroImage, Title } from "components/Landing";
import { calculateYearSince, useInView } from "scripts";

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Container id="Landing">
      <BubblesBackground />
      <div className="wrapper" ref={ref} data-visible={visible}>
        <div className="content">
          <Title />
          <p data-font-size="Focus">
            I’m a {calculateYearSince(new Date("April 22 2000"))} years old React / Typescript
            Front-end developer and UI / UX designer from Ukraine
          </p>
          <Buttons />
        </div>
        <HeroImage />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(108.43deg, #f9f8fd 0%, #f1edff 100%), #f9f8fd;
  height: clamp(400px, 50vh, 520px);
  overflow: hidden;
  position: relative;

  & > .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    padding: 24px 0;
    width: 90%;

    @media (min-width: 2000px) {
      position: relative;
    }

    transition: opacity 1.5s ease;

    &[data-visible="false"] {
      transform: translateY(12px);
      opacity: 0;
    }

    & > .content {
      z-index: 1;

      & p {
        margin: 32px 0;
        max-width: 480px;
        line-height: 1.5;
      }
    }

    @media (max-width: 720px) {
      & > .content > p {
        margin-bottom: 40px;
      }
    }
  }
`;
