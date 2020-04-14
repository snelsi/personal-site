import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import { About, PageFooter, SiteHeader } from "components";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>Roman Zhuravlov - Bio</title>
    </Head>
    <SiteHeader />
    <Main>
      <About />
    </Main>
    <PageFooter />
  </>
);

const Main = styled.main`
  padding: 1.25em;
`;
export default AboutPage;
