import * as React from "react";
import styled from "styled-components";

import { Plate } from "components";

interface StackProps {}

export const Stack: React.FC<StackProps> = () => (
  <div className="block">
    <h6>Мой основной стек:</h6>
    <List>
      <li>
        <Plate value="strong" />
        React
      </li>
      <li>
        <Plate value="strong" />
        Typescript
      </li>
      <li>
        <Plate value="strong" />
        GraphQL
      </li>
      <li>
        <Plate value="strong" />
        Apollo Client
      </li>
      <li>
        <Plate value="strong" />
        Next.js
      </li>
    </List>
  </div>
);

const List = styled.ul`
  list-style: none !important;
  padding-inline-start: 0 !important;

  & li {
    align-items: center;
    display: flex;
  }
`;
