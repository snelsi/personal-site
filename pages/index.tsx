import * as React from "react";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";

import { Landing } from "components/Landing";
import { MainPreview } from "components/PagePreviews";

import {
  ContactButton,
  CardsCatalog,
  SiteFooter,
  GitHubBanner,
  SiteHeader,
  NewsLine,
} from "components";

const GlobalStyles = createGlobalStyle`div.headroom--unfixed > .headroomContainer {
  border-bottom: none;
}`;

const Main = styled.main`
  padding: 40px 0;
`;

const IndexPage: NextPage = () => (
  <>
    <MainPreview />
    <NewsLine />

    <SiteHeader />

    <Landing />

    <Main>
      <GlobalStyles />
      <CardsCatalog />
      <GitHubBanner />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

export default IndexPage;
