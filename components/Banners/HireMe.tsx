import * as React from "react";
import styled from "styled-components";
import { BannerBase } from "components/Banners";

const Banner = styled.a`
  & .banner {
    background: 0% 0% / cover no-repeat url(static/wave.svg), #8a3ffc;

    max-height: 120px;
    & img {
      position: absolute;
      top: -22px;
      right: -4px;
      width: 144px;
      height: 144px;
    }
  }
`;

interface HireMeBannerProps {}

export const HireMeBanner: React.FC<HireMeBannerProps> = () => (
  <Banner href="http://t.me/snelsi" target="_blank" rel="noopener noreferrer">
    <BannerBase title="Let's work together!" label="Contact me in one click.">
      <img src="static/searchingIllustration.svg" alt="Searching for a employee" />
    </BannerBase>
  </Banner>
);
