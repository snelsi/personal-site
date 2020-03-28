import styled from "styled-components";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonOutlined = styled(ButtonBase)`
  background: none;
  border: 1px solid var(--color-blue-6);
  color: var(--color-blue-6);
  width: fit-content;

  &:hover,
  &:focus {
    background-color: var(--color-blue-6);
    color: var(--color-text-white);
  }
  &:active {
    background-color: var(--color-blue-7);
  }

  &:focus {
    box-shadow: 0 0 2px 2px var(--color-blue-4);
  }
`;
