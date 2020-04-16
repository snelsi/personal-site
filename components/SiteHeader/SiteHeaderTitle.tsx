import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ButtonText } from "components";

interface SiteHeaderTitleProps {}

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = () => (
  <Title className="name">
    <Link href="/">
      <ButtonText component="a" href="/">
        Roman Zhuravlov
      </ButtonText>
    </Link>
  </Title>
);

const Title = styled.h5`
  font-weight: 700;
  margin-right: auto;
  margin-left: -0.5em;

  & a {
    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);

    padding: 0.25em 0.5em;
    min-height: 3rem;
  }
`;
