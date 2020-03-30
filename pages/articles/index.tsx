import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { ArticlesList } from "components";

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Link href="/">
        <a href="/">Назад</a>
      </Link>
      <div>Мои статьи</div>
      <ArticlesList />
    </>
  );
};

export default Articles;
