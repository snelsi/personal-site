import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--color-borderline);
  border-radius: 8px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    border: none;
    padding: 0;
  }

  & ul {
    color: var(--color-text-main);
    list-style: outside;
    padding-inline-start: 1.2em;
    & li {
      margin: 0.2em 0;
    }
  }
`;
