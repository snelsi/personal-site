import * as React from "react";
import styled from "styled-components";

import { Plate } from "components";

interface TechnologiesProps {}

export const Technologies: React.FC<TechnologiesProps> = () => (
  <div className="block">
    <h6>Инструменты и технологии:</h6>
    <List>
      <li>
        <Plate value="strong" />
        JavaScript
      </li>
      <li>
        <Plate value="strong" />
        HTML
      </li>
      <li>
        <Plate value="strong" />
        CSS
      </li>
      <li>
        <Plate value="medium" />
        Git
      </li>
      <li>
        <Plate value="medium" />
        Rest API
      </li>
      <li>
        <Plate value="medium" />
        PostgreSQL
      </li>
      <li>
        <Plate value="medium" />
        MySQL
      </li>
      <li>
        <Plate value="medium" />
        C#
      </li>
      <li>
        <Plate value="medium" />
        C++
      </li>
      <li>
        <Plate value="bad" />
        Vue
      </li>
      <li>
        <Plate value="bad" />
        Angular
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
