import * as React from "react";
import styled from "styled-components";
import Img from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Image: React.FC<ImageProps> = ({ src, ...props }) => (
  <Wrapper className="image-container">
    <Img src={`/images/${src}`} {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  background: var(--color-gray-1);
  box-shadow: var(--shadow);

  transition: var(--transition-ease);

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  & > div {
    display: block;
  }

  & img {
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  & .blur-image {
    filter: blur(20px);
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }
`;
