import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--color-borderline);
  border-radius: 8px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  & .about_footer {
    border-top: 1px solid var(--color-borderline);

    align-items: center;
    display: flex;

    margin: auto;
    max-width: 640px;
    min-height: 2em;

    padding-top: 1em;

    & button {
      margin: auto;
    }
  }

  @media (max-width: 640px) {
    &[data-hide-border] {
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
