import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { LinksBlock, PageFooter, PageHeader } from "components";
import { SiteHeader } from "components/SiteHeader";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>

    <SiteHeader />

    <PageHeader data-fix-width>
      <h2>Мои контакты</h2>
      <p>
        Держите! Надеюсь, вы же не будете слать мне рекламу?{" "}
        <span role="img" aria-label="nervous emoji">
          😬
        </span>
      </p>
    </PageHeader>

    <LinksBlock />

    <PageFooter />
  </>
);

export default AboutPage;
