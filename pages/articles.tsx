import * as React from "react";
import { NextPage } from "next";

import { ArticlesList } from "components";

const Articles: NextPage = () => {
  React.useEffect(() => {
    document.title = "Articles";
  }, []);

  return (
    <>
      <div>Мои статьи</div>
      <ArticlesList />
    </>
  );
};

export default Articles;
