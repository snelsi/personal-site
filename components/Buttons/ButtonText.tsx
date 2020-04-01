import styled from "styled-components";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonText = styled(ButtonBase)`
  --base-color: 120, 169, 255;
  --text-color: var(--color-blue-5);

  font-size: 1em;
  padding: 0.5em 1em;

  background-color: rgba(var(--base-color), 0);
  color: var(--text-color);

  &:hover,
  &:focus {
    background-color: rgba(var(--base-color), 0.2);
    color: var(--text-color);
  }
  /* &:focus {
    box-shadow: 0 0 1px 1px var(--color-blue-4);
  } */
  &:active {
    background-color: rgba(var(--base-color), 0.5);
    color: var(--text-color);
  }
`;
