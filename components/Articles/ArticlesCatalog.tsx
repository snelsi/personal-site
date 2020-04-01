import * as React from "react";

import { Card, Gallery } from "components";
import { myArticles, HeroArticle } from "components/Articles";

import { useMediaQuery } from "beautiful-react-hooks";

interface ArticlesCatalogProps {}

export const ArticlesCatalog: React.FC<ArticlesCatalogProps> = () => {
  const isMobile = useMediaQuery("(max-width: 780px)");

  const articles = isMobile ? myArticles.slice(0, 6) : myArticles.slice(1, 7);
  return (
    <>
      {!isMobile && <HeroArticle article={myArticles[0]} />}
      <Gallery anchor="articles" title="Почитать" url="articles" inner fullScreen>
        {articles.map(article => (
          <Card {...article} key={article.id} tag="Article" url={`articles/${article.id}`} />
        ))}
      </Gallery>
    </>
  );
};
