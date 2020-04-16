import * as React from "react";

import {
  SiteHeaderBase,
  SiteHeaderLinks,
  SiteHeaderMenu,
  SiteHeaderTitle,
} from "components/SiteHeader";

interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => (
  <SiteHeaderBase>
    <SiteHeaderTitle />
    <SiteHeaderLinks />
    <SiteHeaderMenu />
  </SiteHeaderBase>
);
