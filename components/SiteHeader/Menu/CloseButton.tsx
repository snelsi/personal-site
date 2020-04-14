import * as React from "react";

import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import { FiX } from "react-icons/fi";

interface CloseButtonProps extends IconButtonProps {}

export const CloseButton: React.FC<CloseButtonProps> = React.forwardRef((props, ref) => (
  <IconButton {...props} ref={ref}>
    <FiX color="var(--color-gray-7)" />
  </IconButton>
));
