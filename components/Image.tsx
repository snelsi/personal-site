/* eslint-disable @typescript-eslint/no-require-imports */
import * as React from "react";
import styled from "styled-components";
import Img from "react-optimized-image";

interface ImageProps {
  src: string;
  alt: string;
  ratio?: number;
}

export const Image: React.FC<ImageProps> = ({ src, alt, ratio = 100 }) => (
  <div>
    <Wrapper className="image-container" ratio={ratio}>
      <Img
        src={require(`../images/${src}`)}
        // webp
        sizes={[400, 800, 1200]}
        alt={alt}
      />
    </Wrapper>
  </div>
);

interface Ratio {
  ratio?: number;
}
const Wrapper = styled.div<Ratio>`
  background: var(--color-gray-2, #dde1e6);
  box-shadow: var(--shadow);
  height: 0;
  overflow: hidden;
  padding-bottom: ${({ ratio = 100 }) => ratio}%;
  position: relative;
  width: 100%;

  transition: var(--transition-ease);

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  & img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: var(--transition-ease);
  }

  & .blur-image {
    filter: blur(20px);
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }
`;
