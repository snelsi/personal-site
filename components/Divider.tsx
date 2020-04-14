import * as React from "react";
import styled from "styled-components";

interface DividerProps {}

export const Divider: React.FC<DividerProps> = () => (
  <Container>
    <hr />
  </Container>
);

const Container = styled.div`
  margin: 20px 0;
  & > hr {
    max-width: 1200px;
    margin: auto;
    border: none;
    height: 1px;
    background-color: var(--color-borderline);
  }
`;
