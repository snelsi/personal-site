import * as React from "react";
import styled from "styled-components";

interface DividerProps {}

export const Divider: React.FC<DividerProps> = () => (
  <Container data-fix-width>
    <hr />
  </Container>
);

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  & > hr {
    background-color: var(--color-borderline);
    border: none;
    height: 1px;
    width: 100%;
  }
`;
