import * as React from "react";
import styled from "styled-components";

import { CardBase } from "components/Projects";

interface CanvasHexagonsProps {}

export const CanvasHexagons: React.FC<CanvasHexagonsProps> = () => (
  <Card>
    <Hexagon />
  </Card>
);

const Card = styled(CardBase)`
  --text-color: white;
  background-color: var(--color-blue-4);
`;

const Hexagon = styled.div`
  position: relative;
  width: 300px;
  height: 173.21px;
  background-color: #64c7cc;
  margin: 86.6px 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 86.6px solid #64c7cc;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 86.6px solid #64c7cc;
  }
`;
