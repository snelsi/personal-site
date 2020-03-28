import * as React from "react";
import styled from "styled-components";

import { ButtonText } from "components";

interface BottomLink {
  as?: "a";
  href: string;
}
export const BottomLink: React.FC<BottomLink> = React.forwardRef(({ children, ...props }, ref) => (
  // @ts-ignore
  <StyledButtonText {...props} ref={ref}>
    <div>{children}</div>
  </StyledButtonText>
));

const StyledButtonText = styled(ButtonText)`
  --base-color: 229, 224, 223;

  color: var(--color-gray-2);

  font-size: 1.25em;

  &:hover,
  &:focus {
    color: var(--color-text-white);
  }
  &:focus {
    box-shadow: 0 0 1px 1px white;
  }
  &:active {
    color: var(--color-text-white);
  }

  & > div {
    border-bottom: 1px solid var(--color-gray-2);
    padding-bottom: 0.2em;
  }
`;
