import * as React from "react";

import { IconButton, ButtonBaseProps } from "components/Buttons";

const MenuIcon = () => (
  <svg fill="var(--color-text-main)" viewBox="0 0 24 24" height="24" width="24">
    <circle cx="5" cy="5" r="2" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

export interface SiteHeaderMenuIconButtonProps extends ButtonBaseProps {}

export const SiteHeaderMenuIconButton: React.FC<SiteHeaderMenuIconButtonProps> = React.forwardRef<HTMLButtonElement>(
  (props, ref) => (
    <IconButton className="site-header-menu-button" {...props} ref={ref} aria-label="Open Menu">
      <MenuIcon />
    </IconButton>
  ),
);
