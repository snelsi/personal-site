import * as React from "react";
import styled from "styled-components";

export const EyeIcon: React.FC<SvgProps> = ({ size }) => (
  <Svg
    size={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

interface SvgProps {
  size?: "small" | "small-x" | "medium" | "medium-x" | "large";
}

const Svg = styled.svg<SvgProps>`
  ${({ size }) => {
    let size_value = 24;
    switch (size) {
      case "small":
        size_value = 16;
        break;
      case "small-x":
        size_value = 20;
        break;
      case "medium":
        size_value = 24;
        break;
      case "medium-x":
        size_value = 28;
        break;
      case "large":
        size_value = 32;
        break;
      default:
        size_value = 24;
    }
    return `height: ${size_value}px; width: ${size_value}px;`;
  }}
`;

const SvgHover = styled(Svg)`
  stroke: #555;
  &:hover,
  &:focus {
    stroke: #f4f4f4 !important;
  }
`;
