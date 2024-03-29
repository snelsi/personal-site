import * as React from "react";
import styled from "@emotion/styled";
import { Image } from "components";
import { useInView } from "scripts";
import AppImage from "public/images/App.jpg";

interface HeroImageProps {}

export const HeroImage: React.FC<HeroImageProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Container ref={ref} data-visible={visible}>
      <Image
        src={AppImage}
        alt="Hero Illustration"
        width={2880}
        height={1900}
        bgColor="#151515"
        priority
      />
    </Container>
  );
};

const Container = styled.div`
  transform: rotateX(16deg) rotateY(-29deg) rotate(6.5deg) translate(-4px, 2px);
  transform-origin: left bottom;
  position: absolute;
  right: 1%;
  top: 1%;

  width: 800px;
  height: 600px;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (min-width: 2000px) {
    top: unset;
    right: -12%;
    height: auto;
    width: clamp(800px, 42vw, 920px);
  }
  @media (max-width: 1500px) {
    width: 45vw;
    height: 500px;
  }
  @media (max-width: 1080px) {
    display: none;
  }

  & > div {
    overflow: hidden;
    border-radius: 8px;
  }
`;
