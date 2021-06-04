import * as React from "react";
import styled from "@emotion/styled";

import { CloseButton } from "components/SiteHeader/Menu";

interface MenuHeaderProps {
  closeDialog: () => void;
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({ closeDialog }) => (
  <Header>
    <h4 data-font-weight="bold">Roman Zhuravlov</h4>
    <CloseButton onClick={closeDialog} />
  </Header>
);

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid var(--color-borderline);
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5em;
  padding-left: 0.25em;
`;
