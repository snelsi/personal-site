import * as React from "react";
import styled from "styled-components";
import StickyHeader from "react-headroom";

const HeaderStyles = {
  zIndex: 100,
} as any;
const wrapperStyle = {
  backgroundColor: "var(--color-background)",
} as any;

const Header = styled(StickyHeader)`
  & .headroom--unpinned:focus-within {
    transform: translate3d(0, 0, 0) !important;
  }
`;

const Nav = styled.nav`
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-borderline);
  overflow: hidden;

  height: 64px;
  padding: 0 clamp(12px, 4vw, 48px);
  transition: padding 0.15s ease;

  @media (max-width: 1020px) {
    height: 60px;
  }
  @media (max-width: 720px) {
    & .site-header-links {
      display: none;
    }
  }

  color: var(--color-text-main);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & a,
  & button {
    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);
  }

  & .site-header-menu-button {
    margin-right: -0.2em;
  }
`;

interface SiteHeaderBaseProps {}

export const SiteHeaderBase: React.FC<SiteHeaderBaseProps> = ({ children }) => (
  <Header
    style={HeaderStyles}
    upTolerance={20}
    downTolerance={20}
    pinStart={62}
    wrapperStyle={wrapperStyle}
    className="montserrat"
  >
    <header>
      <Nav className="headroomContainer">{children}</Nav>
    </header>
  </Header>
);
