import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { PageHeader, Placeholder404 } from "components";
import { SiteHeader } from "components/SiteHeader";

const SupportPage: NextPage = () => (
  <>
    <Head>
      <title>Support</title>
    </Head>

    <SiteHeader />

    <PageHeader data-fix-width>
      <h2>Поддержать меня</h2>
      <p>
        Здесь пока ничего нет{" "}
        <span role="img" aria-label="sleep emoji">
          😴
        </span>
      </p>
    </PageHeader>

    <Placeholder404 />
  </>
);

export default SupportPage;
