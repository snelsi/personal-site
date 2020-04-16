import * as React from "react";
import styled from "styled-components";
import StickyHeader from "react-headroom";

const HeaderStyles: React.CSSProperties = {
  zIndex: 100,
};
const wrapperStyle: React.CSSProperties = {
  backgroundColor: "var(--color-background)",
};

const Header = styled(StickyHeader)`
  & .headroom {
    border-bottom: 1px solid var(--color-borderline);
  }
  & .headroom--scrolled {
    border-bottom: 1px solid var(--color-borderline);
  }

  & .headroom--unpinned:focus-within {
    transform: translate3d(0px, 0, 0px) !important;
  }
`;

const Container = styled.div`
  background-color: var(--color-background);
  overflow: auto;
  padding: 0 20px;
  width: 100%;
  z-index: 100;

  & > div.headerContainer {
    color: var(--color-text-main);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  @media (max-width: 720px) {
    padding-right: 0.25em;

    & .HeaderLinkContainer {
      display: none;
    }
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
  >
    <Container>
      <div className="headerContainer">{children}</div>
    </Container>
  </Header>
);
