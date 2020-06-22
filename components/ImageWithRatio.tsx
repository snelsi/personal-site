import * as React from "react";
import styled from "styled-components";

interface Ratio {
  ratio: number;
}

const Wrapper = styled.div<Ratio>`
  height: 0;
  padding-bottom: ${(props) => props.ratio}%;
  width: 100%;
  position: relative;

  & > img {
    background-color: var(--color-gray-4);
    box-shadow: var(--shadow);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    transition: var(--transition-ease);

    object-fit: cover;

    &:hover {
      box-shadow: var(--shadow-hover);
    }
  }
`;

interface ImageWithRatioProps {
  ratio?: number;
  src: string;
  alt: string;
}

export const ImageWithRatio: React.FC<ImageWithRatioProps> = ({ src, alt, ratio = 100 }) => (
  <Wrapper ratio={ratio} className="imageWrapper">
    <img src={src} alt={alt} />
  </Wrapper>
);
