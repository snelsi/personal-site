import * as React from "react";
import styled from "styled-components";
import { BannerBase } from "components/Banners";

const Banner = styled.a`
  & .banner {
    /* background: 0% 0% / cover no-repeat url(static/wave.svg), #8a3ffc; */
    background: centert 40% / cover no-repeat
      url(https://images.unsplash.com/photo-1565258923824-2cae92997fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);

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
      {/* <img src="static/icons/searchingIcon.svg" alt="Searching for a employee" /> */}
    </BannerBase>
  </Banner>
);
