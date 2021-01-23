import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ButtonText } from "components";

interface SiteHeaderTitleProps {}

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = () => (
  <Title className="name" data-font-size="X" data-font-weight="Bold">
    <Link href="/">
      <ButtonText component="a" href="/">
        Roman Zhuravlov
      </ButtonText>
    </Link>
  </Title>
);

const Title = styled.h6`
  margin-left: -0.25em;
  white-space: nowrap;
  & a {
    padding: 0.25em 0.5em;

    & > svg {
      margin-right: 4px;
      height: 24px;
      width: 24px;
    }
  }
`;
