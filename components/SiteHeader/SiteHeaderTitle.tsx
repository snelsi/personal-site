import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ButtonText } from "components";

const Waves = () => (
  <svg fill="none" viewBox="0 0 24 24">
    <path
      fill="#000"
      d="M16.29 22a7.4 7.4 0 01-5.3-2.21 4.61 4.61 0 00-6.55 0 1.43 1.43 0 01-2.33-1.57c.07-.18.18-.34.3-.47a7.46 7.46 0 0110.6 0 4.62 4.62 0 006.55 0A1.43 1.43 0 0122 18.77a1.45 1.45 0 01-.42 1.02 7.46 7.46 0 01-5.3 2.21zm0-5.77a7.4 7.4 0 01-5.3-2.21 4.61 4.61 0 00-6.55 0A1.42 1.42 0 012 13c0-.38.15-.75.42-1.02a7.46 7.46 0 0110.59 0 4.62 4.62 0 006.55 0A1.42 1.42 0 0122 13c0 .38-.15.75-.42 1.02a7.46 7.46 0 01-5.3 2.21zm0-5.77a7.4 7.4 0 01-5.3-2.21 4.61 4.61 0 00-6.55 0 1.43 1.43 0 01-2.02 0 1.44 1.44 0 010-2.04 7.46 7.46 0 0110.59 0 4.62 4.62 0 006.55 0A1.42 1.42 0 0122 7.23c0 .38-.15.75-.42 1.02a7.46 7.46 0 01-5.3 2.21z"
    />
  </svg>
);

interface SiteHeaderTitleProps {}

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = () => (
  <Title className="name">
    <Link href="/">
      <ButtonText component="a" href="/">
        <Waves />
        Roman Zhuravlov
      </ButtonText>
    </Link>
  </Title>
);

const Title = styled.h6`
  margin-right: auto;

  & a {
    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);

    padding: 0.25em 0.5em;
    min-height: 3rem;

    & > svg {
      margin-right: 4px;
      height: 24px;
      width: 24px;
    }
  }
`;
