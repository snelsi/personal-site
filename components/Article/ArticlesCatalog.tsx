import * as React from "react";

import { Card, Gallery } from "components";
import { articles } from "components/Article";

interface ArticlesCatalogProps {}

export const ArticlesCatalog: React.FC<ArticlesCatalogProps> = () => (
  <Gallery anchor="articles" title="Почитать" url="Articles" inner>
    {articles.map(props => (
      <Card key={props.url} tag="Article" {...props} />
    ))}
  </Gallery>
);
