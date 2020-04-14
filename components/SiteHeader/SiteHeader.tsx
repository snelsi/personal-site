import * as React from "react";
import Link from "next/link";

import { SiteHeaderBase, SiteHeaderLinks, SiteHeaderMenu } from "components/SiteHeader";

interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => (
  <SiteHeaderBase>
    <h5 className="name">
      <Link href="/">
        <a href="/">Roman Zhuravlov</a>
      </Link>
    </h5>
    <SiteHeaderLinks />
    <SiteHeaderMenu />
  </SiteHeaderBase>
);
