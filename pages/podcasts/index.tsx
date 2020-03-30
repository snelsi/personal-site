import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { PodcastsCatalog } from "components";

const Podcasts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Podcasts</title>
      </Head>
      <Link href="/">
        <a href="/">Назад</a>
      </Link>
      <div>Мои Подкасты</div>
      <PodcastsCatalog />
    </>
  );
};

export default Podcasts;
