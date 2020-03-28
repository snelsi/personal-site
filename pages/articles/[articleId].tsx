import * as React from "react";
import { NextPage, NextPageContext } from "next";

import Link from "next/link";
import {} from "components";

interface ArticleProps {
  articleId: string;
}
const Article: NextPage<ArticleProps> = ({ articleId }) => {
  React.useEffect(() => {
    document.title = "Podcast";
  }, []);

  return (
    <>
      <Link href="/articles">
        <a href="/articles">Назад</a>
      </Link>
      <div>Статья {articleId}</div>
    </>
  );
};

interface MyContext extends NextPageContext {}
Article.getInitialProps = async (ctx: MyContext) => {
  const { articleId } = ctx.query;
  return { articleId: Array.isArray(articleId) ? articleId[0] : articleId };
};

export default Article;
