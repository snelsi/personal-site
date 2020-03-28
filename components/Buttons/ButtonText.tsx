import styled from "styled-components";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonText = styled(ButtonBase)`
  --base-color: 120, 169, 255;

  font-size: 1em;
  padding: 0.5em 1em;

  background-color: rgba(var(--base-color), 0);
  color: var(--color-blue-5);

  &:hover,
  &:focus {
    background-color: rgba(var(--base-color), 0.2);
    color: var(--color-blue-5);
  }
  /* &:focus {
    box-shadow: 0 0 1px 1px var(--color-blue-4);
  } */
  &:active {
    background-color: rgba(var(--base-color), 0.5);
    color: var(--color-blue-5);
  }
`;
