import * as React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  --size: 100px;
  height: var(--size);
  width: var(--size);

  transition: var(--transition-ease);
  position: relative;

  & img {
    object-fit: fit;
  }

  @media (max-width: 600px) {
    --size: 80px;
  }
`;

const ToolComponent = styled.div`
  font-size: 20px;
  text-align: center;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover > .logo {
    transform: scale(1.05);
  }
  &:active > .logo {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    & > p {
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
      <ImageWrapper className="logo">
        <Image src={src} alt={alt} draggable="false" layout="fill" />
      </ImageWrapper>
      <p className="montserrat">{title}</p>
    </ToolComponent>
  </li>
);
