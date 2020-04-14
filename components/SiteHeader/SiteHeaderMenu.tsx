import * as React from "react";

import { SiteHeaderMenuIconButton, Menu } from "components/SiteHeader";

interface SiteHeaderMenuProps {}

export const SiteHeaderMenu: React.FC<SiteHeaderMenuProps> = () => {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <SiteHeaderMenuIconButton onClick={openDialog} />
      <Menu open={open} closeDialog={closeDialog} />
    </>
  );
};
