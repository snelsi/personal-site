import * as React from "react";
import styled from "styled-components";

import { Bottom, ExploreLinks, SocialLinks, OtherLinks } from "components/SiteFooter";

interface SiteFooterProps {}

export const SiteFooter: React.FC<SiteFooterProps> = () => (
  <FooterBase>
    <div data-fix-width>
      <div className="top">
        <div className="about">
          <h2 data-font-size="XL" className="montserrat">
            Roman Zhuravlov
          </h2>
          <p data-font-size="Focus">
            Web Developer, Frontender, UI/UX Designer, Genius, Billionaire, Playboy, Philanthropist,
            Cool Guy from Ukraine.
          </p>
        </div>
        <div className="blocks">
          <ExploreLinks />
          <SocialLinks />
          <OtherLinks />
        </div>
      </div>
      <Bottom />
    </div>
  </FooterBase>
);

const FooterBase = styled.footer`
  --color-text-secondary: #a9a9a9;
  --color-text-secondary-hover: #fff;

  background-color: var(--color-gray-10);
  color: white;

  overflow: auto;

  padding: 3em 0 2em;

  & ul {
    list-style: none;
  }

  & div.top {
    display: grid;
    gap: 48px;

    & > .about {
      & > p {
        color: var(--color-text-secondary);
        margin-top: 32px;
        margin-right: 1em;
        max-width: 360px;
        line-height: 1.5;
      }
    }

    @media (min-width: 1020px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1019px) {
      grid-template-columns: 1fr;
    }
  }

  & div.blocks {
    display: flex;

    & > div:not(:last-child) {
      margin-right: 48px;
    }
    & > div {
      @media (min-width: 520px) {
        min-width: 100px;
      }
    }
    @media (max-width: 460px) {
      flex-direction: column;
      & > div:not(:last-child) {
        margin-bottom: 48px;
      }
    }
  }
`;
