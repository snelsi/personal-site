import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { Catalog } from "components";
import { TimestampCard } from "components/Projects/Timestamp";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Link href="/">
        <a href="/">Назад</a>
      </Link>
      <div>Мои проекты</div>
      <TimestampCard />
      <Catalog />
    </>
  );
};

export default Projects;
