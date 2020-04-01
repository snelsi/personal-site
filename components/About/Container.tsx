import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e7e9f5;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  max-width: 1200px;
  margin: auto;

  & header,
  & footer {
    align-items: center;
    display: flex;

    margin: auto;
    max-width: 640px;
    min-height: 2em;

    & button {
      margin: auto;
    }
  }

  & header {
    border-bottom: 1px solid #e7e9f5;
    padding-bottom: 1em;
  }
  & footer {
    border-top: 1px solid #e7e9f5;
    padding: 1em 0;
  }

  @media (max-width: 640px) {
    &[data-hide] {
      border: none;
      padding: 0;
    }
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
