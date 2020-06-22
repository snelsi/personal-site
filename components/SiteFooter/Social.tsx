import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface SocialLinksProps {}

export const SocialLinks: React.FC<SocialLinksProps> = () => (
  <LinksBlock title="Social">
    <FooterLink href="https://vk.com/snelsi">VKontakte </FooterLink>
    <FooterLink href="https://www.facebook.com/Snelsi">Facebook</FooterLink>
    <FooterLink href="https://www.linkedin.com/in/roman-zhuravlov/">LinkedIn</FooterLink>
  </LinksBlock>
);
