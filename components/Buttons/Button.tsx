import styled from "@emotion/styled";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const Button = styled(ButtonBase)`
  background-color: var(--color-primary);
  border-radius: 4px;
  color: var(--color-text-white);
  font-size: 1.25em;
  padding: 0.5em 2em;

  @media (max-width: 640px) {
    font-size: 1.125em;
  }

  &:focus {
    box-shadow: 0 0 2px 2px var(--color-primary-lighter);
  }
`;
