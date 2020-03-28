import * as React from "react";
import { NextPage } from "next";

import Link from "next/link";
import { ArticlesList } from "components";

const Articles: NextPage = () => {
  React.useEffect(() => {
    document.title = "Articles";
  }, []);

  return (
    <>
      <Link href="/">
        <a href="/">Назад</a>
      </Link>
      <div>Мои статьи</div>
      <ArticlesList />
    </>
  );
};

export default Articles;
