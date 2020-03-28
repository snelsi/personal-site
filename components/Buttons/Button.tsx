import styled from "styled-components";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const Button = styled(ButtonBase)`
  background-color: var(--color-blue-6);
  color: var(--color-text-white);

  padding: 0.625em 1.25em;

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.96);
  }

  &:focus {
    box-shadow: 0 0 2px 2px var(--color-blue-4);
  }
`;
