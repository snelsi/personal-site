import styled from "styled-components";

export interface CardBaseProps {}

export const CardBase = styled.a`
  --text-color: white;
  background-color: #171717;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: var(--text-color);
  border-radius: 1em;
  display: block;
  height: 480px;
  margin: auto;
  padding: 2rem;
  position: relative;
  transition: var(--transition-ease);
  overflow: hidden;
  outline: none;
  width: 100%;

  &:hover {
    box-shadow: 0 0 2px 2px var(--color-blue-4);
    color: var(--text-color);
  }
  &:focus {
    box-shadow: 0 0 2px 3px var(--color-blue-6);
    color: var(--text-color);
  }

  @media (min-width: 920px) {
    padding: 2.5rem 4rem;
  }
`;
