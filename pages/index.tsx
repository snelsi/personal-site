import * as React from "react";
import { NextPage } from "next";
import styled from "@emotion/styled";

import { Landing } from "components/Landing";

import {
  ContactButton,
  CardsCatalog,
  SiteFooter,
  GitHubBanner,
  SiteHeader,
  NewsLine,
} from "components";

const Main = styled.main`
  min-height: calc(100vh - 800px);
  padding: 40px 0;
`;

const IndexPage: NextPage = () => (
  <>
    <NewsLine />

    <SiteHeader />

    <Landing />

    <Main>
      <CardsCatalog />
      <GitHubBanner />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

export default IndexPage;
