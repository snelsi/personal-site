import styled from "@emotion/styled";
import { ButtonText } from "components/Buttons";

export const IconButton = styled(ButtonText)`
  --base-color: var(--color-button-gray);
  --text-color: var(--color-text-main);

  font-size: 1.5rem;

  height: 2em;
  width: 2em;
  padding: 0.25em;

  &[data-size="small" i] {
    font-size: 1rem;
  }
  &[data-size="medium" i] {
    font-size: 1.25rem;
  }
  &[data-size="normall" i] {
    font-size: 1.5rem;
  }
  &[data-size="big" i] {
    font-size: 2rem;
  }

  & > img,
  & > svg {
    height: 1em;
    width: 1em;
  }
`;
