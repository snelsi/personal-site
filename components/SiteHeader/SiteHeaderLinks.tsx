import * as React from "react";
import styled from "styled-components";

import { SiteHeaderLink } from "components/SiteHeader";

interface SiteHeaderLinksProps {}

export const SiteHeaderLinks: React.FC<SiteHeaderLinksProps> = () => (
  <Container className="site-header-links">
    <SiteHeaderLink href="/blog">Blog</SiteHeaderLink>
    <SiteHeaderLink href="/about">About me</SiteHeaderLink>
    <SiteHeaderLink href="/contact">Contact</SiteHeaderLink>
  </Container>
);

const Container = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
`;
