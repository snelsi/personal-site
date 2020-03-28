import * as React from "react";
import styled from "styled-components";

import { Button } from "components/Buttons";

const FixedButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 16px;
  z-index: 12;
`;

interface ContactButtonProps {}

export const ContactButton: React.FC<ContactButtonProps> = () => (
  <FixedButton type="button">Написать мне</FixedButton>
);
