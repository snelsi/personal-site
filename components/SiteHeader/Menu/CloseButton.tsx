import * as React from "react";

import { IconButton } from "components";
import { IconButtonProps } from "@material-ui/core/IconButton";
import { FiX } from "react-icons/fi";

interface CloseButtonProps extends IconButtonProps {}

export const CloseButton: React.FC<CloseButtonProps> = React.forwardRef((props, ref) => (
  <IconButton {...props} ref={ref} aria-label="Close Menu">
    <FiX color="var(--color-text-main)" />
  </IconButton>
));
