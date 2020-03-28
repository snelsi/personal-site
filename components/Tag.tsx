import styled from "styled-components";

import { ButtonText } from "components/Buttons";

export const Tag = styled(ButtonText)`
  background-color: rgba(208, 226, 255, 0.5);
  color: var(--color-blue-5);

  display: inline-block;
  font-weight: 400;
  margin-right: 12px;

  line-height: 1.4em;
  font-size: 0.8em;
  padding: 0.5em 1em;

  &:not([data-type]) {
    &:hover {
      background-color: rgba(208, 226, 255, 0.75);
      color: var(--color-blue-5);
    }
    &:focus {
      background-color: rgba(208, 226, 255, 1);
      color: var(--color-blue-5);
    }
    &:active {
      background-color: rgba(166, 200, 255, 1);
      color: var(--color-blue-6);
    }
  }
`;
