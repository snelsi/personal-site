import * as React from "react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { About, ContactButton, NewsLine, SiteFooter, SiteHeader } from "components";

const AboutPage: NextPage = () => (
  <>
    <NextSeo
      title="Roman Zhuravlov - About me"
      description="My biography and experience."
      canonical="https://snelsi.com/about"
      openGraph={{
        url: "https://snelsi.com/about",
        title: "Roman Zhuravlov - About me",
        type: "profile",
        description: "Personal site, blog and portfolio of Roman Zhuravlov.",
      }}
    />
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
