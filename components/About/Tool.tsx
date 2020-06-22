import * as React from "react";
import styled from "styled-components";

const ToolComponent = styled.div`
  font-size: 20px;
  text-align: center;
  width: fit-content;

  & > img {
    --size: 100px;
    width: var(--size);
    height: var(--size);
    margin-bottom: 20px;
    transition: var(--transition-ease);
    object-fit: fit;
    user-select: none;
  }

  &:hover {
    & > img {
      transform: scale(1.05);
    }
  }
  &:active {
    & > img {
      transform: scale(0.95);
    }
  }

  @media (max-width: 600px) {
    & > img {
      --size: 80px;
    }

    & > div {
      font-size: 16px;
    }
  }
`;

interface ToolProps {
  title: string;
  src: string;
  alt: string;
}
export const Tool: React.FC<ToolProps> = ({ title, src, alt }) => (
  <li>
    <ToolComponent>
      <img src={src} alt={alt} draggable="false" />
      <div className="montserrat">{title}</div>
    </ToolComponent>
  </li>
);
