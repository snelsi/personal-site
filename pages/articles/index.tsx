import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { ArticlesList, PageFooter, PageHeader } from "components";
import { SiteHeader } from "components/SiteHeader";

const Articles: NextPage = () => (
  <>
    <Head>
      <title>Articles</title>
    </Head>

    <SiteHeader />

    <main>
      <PageHeader data-fix-width>
        <h2>Мои статьи</h2>
        <p>Колкие, весёлые, полезные, серьёзные. Истории для вас</p>
      </PageHeader>
      <ArticlesList />
    </main>
    <PageFooter />
  </>
);

export default Articles;
