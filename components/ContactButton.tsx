import * as React from "react";

import { styled } from "@material-ui/core/styles";
import { Button } from "components/Buttons";

const FixedButton = styled(Button)({
  position: "fixed",
  bottom: 20,
  right: 16,
  zIndex: 12,
});

interface ContactButtonProps {}

export const ContactButton: React.FC<ContactButtonProps> = () => (
  <FixedButton type="button">Написать мне</FixedButton>
);
