import styled from "@emotion/styled";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonOutlined = styled(ButtonBase)`
  background: none;
  border: 1px solid var(--color-primary);
  color: var(--color-text-primary);
  width: fit-content;

  &:hover,
  &:focus {
    background: none;
    color: var(--color-text-white);
  }
`;
