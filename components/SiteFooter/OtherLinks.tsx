import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface OtherLinksProps {}

export const OtherLinks: React.FC<OtherLinksProps> = () => (
  <LinksBlock title="Other">
    <FooterLink href="https://mykp.ru/snelsi">Kinopoisk</FooterLink>
    <FooterLink href="https://www.twitch.tv/snelsi">Twitch</FooterLink>
    <FooterLink href="https://steamcommunity.com/id/Snelsi">Steam</FooterLink>
  </LinksBlock>
);
