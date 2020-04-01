import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { ArticlesList } from "components";
import { Header } from "components/LandingHeader/Header";

const Articles: NextPage = () => (
  <>
    <Head>
      <title>Articles</title>
    </Head>
    <Header />

    <PageHeader>
      <div>
        <h2>Мои статьи</h2>
        <p>Колкие, весёлые, полезные, серьёзные. Истории для вас</p>
      </div>
    </PageHeader>
    <ArticlesList />
  </>
);

const PageHeader = styled.div`
  margin: 1.5rem 0;
  padding: 0 1.5rem;

  & > div {
    margin: auto;
    max-width: 1200px;
    & > h2 {
    }
    & > p {
      color: var(--color-text-secondary);
      margin-top: 1.5rem;
    }
  }
`;

export default Articles;
