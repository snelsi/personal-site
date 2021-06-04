import styled from "@emotion/styled";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonText = styled(ButtonBase)`
  --base-color: 109, 159, 255;
  --text-color: var(--color-primary);

  background-color: rgba(var(--base-color), 0);
  color: var(--text-color);

  &:hover,
  &:focus {
    background-color: rgba(var(--base-color), 0.2);
    color: var(--text-color);
  }
  &:active {
    background-color: rgba(var(--base-color), 0.25);
    color: var(--text-color);
  }
`;
