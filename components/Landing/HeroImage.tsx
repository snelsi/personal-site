import * as React from "react";
import styled from "styled-components";

interface HeroImageProps {}

export const HeroImage: React.FC<HeroImageProps> = () => (
  <Container>
    <img src="/App.jpg" alt="Hero Illustration" />
  </Container>
);

const Container = styled.div`
  transform: rotateX(16deg) rotateY(-29deg) rotate(6.5deg) translate(-4px, 2px);
  transform-origin: left bottom;
  position: absolute;
  right: 1%;
  top: 1%;

  width: 800px;
  height: 600px;
  z-index: 0;

  @media (max-width: 1500px) {
    width: 45vw;
    height: 500px;
  }
  @media (max-width: 1080px) {
    display: none;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
