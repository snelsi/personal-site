import * as React from "react";
import styled from "styled-components";

import { CardBase } from "components/Projects";

interface CocomoCalculatorProps {}

export const CocomoCalculator: React.FC<CocomoCalculatorProps> = () => (
  <Card href="https://cocomo.now.sh/" target="_blank" rel="noopener noreferrer">
    <h2>Cocomo Calculator</h2>
  </Card>
);

const Card = styled(CardBase)`
  --text-color: white;
  background-color: var(--color-blue-4);
`;
