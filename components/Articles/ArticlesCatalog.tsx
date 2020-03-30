import * as React from "react";

import { Card, Gallery } from "components";
import { myArticles } from "components/Articles";

interface ArticlesCatalogProps {}

export const ArticlesCatalog: React.FC<ArticlesCatalogProps> = () => (
  <Gallery anchor="articles" title="Почитать" url="articles" inner fullScreen>
    {myArticles.map(article => (
      <Card {...article} key={article.id} tag="Article" url={`articles/${article.id}`} />
    ))}
  </Gallery>
);
