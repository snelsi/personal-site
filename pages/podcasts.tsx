import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { SiteHeader } from "components/SiteHeader";
import { PageHeader, Placeholder404 } from "components";

const Podcasts: NextPage = () => (
  <>
    <Head>
      <title>Podcasts</title>
    </Head>
    <SiteHeader />

    <main>
      <PageHeader data-fix-width>
        <h2>Мои Подкасты</h2>
        <p>
          Тут пока ничего нет!{" "}
          <span role="img" aria-label="sleeping emoji">
            😪
          </span>
          <br /> Заходите позже!
        </p>
      </PageHeader>

      <Placeholder404 />
    </main>
  </>
);

export default Podcasts;
