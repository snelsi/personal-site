import * as React from "react";
import styled from "styled-components";

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
    <RightPart>
      <SiteHeaderLinks />
      <SiteHeaderMenu />
    </RightPart>
  </SiteHeaderBase>
);

const RightPart = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  height: 100%;
`;
