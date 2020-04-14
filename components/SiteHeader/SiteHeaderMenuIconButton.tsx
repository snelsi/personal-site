import * as React from "react";

import { FiGrid } from "react-icons/fi";
import { IconButton, ButtonBaseProps } from "components/Buttons";

export interface SiteHeaderMenuIconButtonProps extends ButtonBaseProps {}

export const SiteHeaderMenuIconButton: React.FC<SiteHeaderMenuIconButtonProps> = React.forwardRef<
  HTMLButtonElement
>((props, ref) => (
  <IconButton {...props} ref={ref}>
    <FiGrid color="var(--color-text-main)" size="24" strokeWidth="1.5" />
  </IconButton>
));
