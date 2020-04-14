import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { Placeholder404, PageHeader, SiteHeader } from "components";

const MyLink = styled.a`
  text-decoration: underline;
`;

interface My404Props {}

export const My404: React.FC<My404Props> = () => (
  <>
    <Head>
      <title>404 - Страница не найдена</title>
    </Head>
    <SiteHeader />
    <PageHeader data-fix-width>
      <h2>
        Такой страницы нет!{" "}
        <span role="img" aria-label="sad emoji">
          😥
        </span>
      </h2>
      <p>
        Но есть{" "}
        <Link href="/">
          <MyLink href="/">другие</MyLink>
        </Link>
        , не расстраивайтесь!
      </p>
    </PageHeader>
    <Placeholder404 />
  </>
);

export default My404;
