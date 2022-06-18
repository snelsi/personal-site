import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import { realisticConfetti } from "scripts";

const Wrapper = styled.li`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: 20px;
  height: 100px;
  width: 100px;
  overflow: hidden;
  transition: var(--transition-ease);

  &[data-highlighted="false"] {
    filter: grayscale(100%);
    opacity: 0.6;
  }

  &[data-highlighted="true"],
  &:hover,
  &:focus-visible {
    filter: none;
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }

  & > * {
    --size: 100px;
    width: var(--size) !important;
    height: var(--size) !important;
  }
`;

interface TechnologyProps {
  title: string;
  src: any;
  big?: boolean;
}
export const Technology: React.FC<TechnologyProps> = ({ title, src }) => {
  const [highlighted, setHighlighted] = React.useState(false);

  const toggle = async () => {
    await setHighlighted(!highlighted);

    if (
      document?.getElementById("technologies-catalog")?.getElementsByClassName("gray")?.length === 0
    ) {
      realisticConfetti();
    }
  };

  return (
    <Wrapper
      onClick={toggle}
      className={`technology ${highlighted ? "highlighted" : "gray"}`}
      data-highlighted={highlighted}
    >
      <Image src={src} draggable="false" aria-label={title} layout="responsive" />
    </Wrapper>
  );
};
