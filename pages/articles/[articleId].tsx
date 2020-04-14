import * as React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { PageHeader, PageFooter, SiteHeader, Placeholder404 } from "components";

interface ArticleProps {
  articleId: string;
}
const Article: NextPage<ArticleProps> = ({ articleId }) => (
  <>
    <Head>
      <title>Article {articleId}</title>
    </Head>

    <SiteHeader />

    <main data-fix-width>
      <PageHeader>
        <h2>Тут будет статья!</h2>
        <p>{articleId}</p>
      </PageHeader>

      <Placeholder404 />
    </main>
    <PageFooter />
  </>
);

interface MyContext extends NextPageContext {}
Article.getInitialProps = async (ctx: MyContext) => {
  const { articleId } = ctx.query;
  return { articleId: Array.isArray(articleId) ? articleId[0] : articleId };
};

export default Article;
