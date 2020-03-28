import * as React from "react";
import styled from "styled-components";

import { Tag } from "components/Tag";

const PlateBase = styled(Tag)`
  color: #fff;
  width: 92px;

  &[data-type="strong"] {
    background-color: var(--color-green-4);
  }
  &[data-type="medium"] {
    background-color: var(--color-cyan-4);
  }
  &[data-type="bad"] {
    background-color: var(--color-red-5);
  }
`;

interface PlateProps {
  value: "strong" | "medium" | "bad";
}

export const Plate: React.FC<PlateProps> = ({ value }) => {
  if (value === "strong") return <PlateBase data-type={value}>Strong</PlateBase>;
  if (value === "medium") return <PlateBase data-type={value}>Medium</PlateBase>;
  if (value === "bad") return <PlateBase data-type={value}>Low</PlateBase>;
  return <PlateBase data-type={value}>Low</PlateBase>;
};
