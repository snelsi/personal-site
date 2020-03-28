import styled from "styled-components";

export const IconButton = styled.button`
  --base-color: 242, 242, 242;

  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;

  height: 2.5em;
  width: 2.5em;
  padding: 0.5em;

  text-decoration: none;
  transition: var(--transition-ease);
  outline: none;

  background-color: rgba(var(--base-color), 0);

  &:hover,
  &:focus {
    background-color: rgba(var(--base-color), 0.2);
  }
  &:focus {
    /* background-color: rgba(var(--base-color), 0.5); */
    box-shadow: 0 0 1px 2px white;
  }
  &:active {
    background-color: rgba(var(--base-color), 0.75);
  }
`;
