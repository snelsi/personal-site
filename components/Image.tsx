import * as React from "react";
import styled from "styled-components";
import Img, { ImageProps as NextImageProps } from "next/image";

interface ImageProps {
  bgColor?: string;
  noShadow?: boolean;
  minHeight?: number;
  layout?: "normal" | "wide" | "fullscreen";
  sharp?: boolean;
}
export const Image: React.FC<ImageProps & NextImageProps> = ({
  src,
  bgColor,
  noShadow = false,
  layout = "normal",
  minHeight = 0,
  sharp = false,
  ...props
}) => (
  <Wrapper
    className="image-container"
    style={bgColor ? { background: bgColor } : undefined}
    data-no-shadow={noShadow}
    data-width={layout}
    minHeight={minHeight}
    data-sharp={sharp}
  >
    <Img src={`/images/${src}`} {...props} />
  </Wrapper>
);

const Wrapper = styled.div<ImageProps>`
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
    ${({ minHeight }) => {
      if (minHeight) {
        return `min-height: ${minHeight}px;`;
      }
      return "";
    }}
  }

  &[data-sharp="true"] img {
    image-rendering: -webkit-optimize-contrast;
  }

  & .blur-image {
    filter: blur(20px);
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
  }

  &[data-no-shadow="true"] {
    box-shadow: none;
  }
`;
