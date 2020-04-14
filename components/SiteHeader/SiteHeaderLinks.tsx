import * as React from "react";

import { SiteHeaderLink } from "components/SiteHeader";

interface SiteHeaderLinksProps {}

export const SiteHeaderLinks: React.FC<SiteHeaderLinksProps> = () => (
  <>
    <SiteHeaderLink href="/about">Про меня</SiteHeaderLink>
    <SiteHeaderLink href="/articles">Блог</SiteHeaderLink>
    <SiteHeaderLink href="/projects">Работы</SiteHeaderLink>
  </>
);
