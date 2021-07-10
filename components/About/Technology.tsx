import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import { realisticConfetti } from "scripts";

const Wrapper = styled.li`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin: 20px;

  & > div {
    --size: 100px;
    border-radius: 4px;
    cursor: pointer;

    transition: var(--transition-ease);
    width: var(--size);
    height: var(--size);
    user-select: none;
    overflow: hidden;

    &[data-highlighted="false"],
    &:not(:hover) {
      filter: grayscale(100%);
      opacity: 0.6;
    }

    &[data-highlighted="true"] {
      filter: none;
      opacity: 1;
    }

    &:active {
      transform: scale(0.95);
    }
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
    <Wrapper onClick={toggle} className={`technology ${highlighted ? "highlighted" : "gray"}`}>
      <Image src={src} draggable="false" aria-label={title} data-highlighted={highlighted} />
    </Wrapper>
  );
};
