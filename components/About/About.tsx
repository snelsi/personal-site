import * as React from "react";
import styled from "@emotion/styled";

import {
  Summary,
  Contact,
  Degree,
  Expirience,
  Intro,
  Languages,
  ProfessionalSkills,
  HoursWorked,
  Sallery,
  Start,
  Technologies,
  Tools,
} from "components/About";

const Wrapper = styled.div`
  --page-width: min(95%, 100% - 12px * 2);
  & .block {
    padding: 0;
    margin: 10vw auto;
    width: var(--page-width);

    &:first-child {
      margin-top: 5vw;
    }

    @media (max-width: 800px) {
      margin: 120px auto;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  & a {
    color: inherit;
    border-bottom: 1px solid rgba(31, 31, 31, 0.4);

    &:hover {
      border-bottom: 1px solid rgba(31, 31, 31, 0.75);
    }
  }

  & li {
    list-style: none;
  }

  & .text-block {
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.03em;
    max-width: 600px;
    width: 100%;
    margin-bottom: 4.65vw;

    padding: 0 2.325vw;

    @media (max-width: 800px) {
      padding: 0 4vw;
    }

    @media (min-width: 600px) {
      &:not([data-right]) {
        padding-left: 2.325vw;
        margin-right: auto;
      }

      &[data-right] {
        padding-right: 2.325vw;
        margin-left: auto;
      }
    }
  }

  & h2,
  & h3 {
    font-family: Montserrat, var(--sans-family);
  }
  & h3 {
    color: #111;
    margin-bottom: 0.75em;
  }
  & li,
  & p {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 800px) {
      font-size: 19px;
    }
  }

  & .no-wrap {
    white-space: nowrap;
  }
`;

interface AboutProps {}

export const About: React.FC<AboutProps> = () => (
  <Wrapper>
    <Intro />
    <Degree />
    <Start />
    <ProfessionalSkills />
    <Expirience />
    <HoursWorked />
    <Technologies />
    <Languages />
    <Tools />
    <Summary />
    <Sallery />
    <Contact />
  </Wrapper>
);
