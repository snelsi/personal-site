import * as React from "react";
import styled from "styled-components";
import Img, { ImageProps } from "next/image";

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
    display: block !important;
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
