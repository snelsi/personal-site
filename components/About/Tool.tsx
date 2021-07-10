import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const ToolComponent = styled.div`
  font-size: 20px;
  text-align: center;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    --size: 100px;
    width: var(--size);
    height: var(--size);

    transition: var(--transition-ease);

    user-select: none;

    & img {
      object-fit: fit;
    }
  }
  & > span {
    margin-top: 20px;
  }

  &:hover {
    & > div {
      transform: scale(1.05);
    }
  }
  &:active {
    & > div {
      transform: scale(0.95);
    }
  }

  @media (max-width: 600px) {
    & > div {
      --size: 80px;
    }

    & > span {
      font-size: 16px;
    }
  }
`;

interface ToolProps {
  title: string;
  src: any;
  alt: string;
}
export const Tool: React.FC<ToolProps> = ({ title, src, alt }) => (
  <li>
    <ToolComponent>
      <Image src={src} alt={alt} draggable="false" />
      <span className="montserrat">{title}</span>
    </ToolComponent>
  </li>
);
