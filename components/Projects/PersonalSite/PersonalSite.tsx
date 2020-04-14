import * as React from "react";
import styled from "styled-components";

import { CardBase } from "components/Projects";

interface PersonalSiteProps {}

export const PersonalSite: React.FC<PersonalSiteProps> = () => (
  <Card href="http://snelsi.now.sh/" target="_blank" rel="noopener noreferrer">
    <div className="title">My Personal Site!</div>
  </Card>
);

const Card = styled(CardBase)`
  --text-color: white;
  background-color: #171717;
  border: 2px solid rgba(255, 255, 255, 0.1);

  & div.title {
    font-size: 48px;

    font-weight: 600;
  }
  & p {
    color: var(--color-grey-8);
    font-size: 18px;
    margin: 32px 0;
    max-width: 260px;
  }

  @media (max-width: 720px) {
    & div.title {
      font-size: 24px;
    }
  }
`;
