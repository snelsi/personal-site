import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import { About, ContactButton, NewsLine, SiteFooter, SiteHeader } from "components";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>Roman Zhuravlov - About me</title>
    </Head>
    <NewsLine />
    <SiteHeader />
    <Main>
      <About />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;
export default AboutPage;
