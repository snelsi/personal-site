import * as React from "react";

import { styled } from "@material-ui/core/styles";
import { Button } from "components/Buttons";
import Link from "next/link";

const FixedButton = styled(Button)({
  position: "fixed",
  bottom: 20,
  right: 16,
  zIndex: 12,
});

interface ContactButtonProps {}

export const ContactButton: React.FC<ContactButtonProps> = () => (
  <Link href="/contact">
    <FixedButton>Contact me</FixedButton>
  </Link>
);
