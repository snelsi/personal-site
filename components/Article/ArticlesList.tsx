import * as React from "react";
import styled from "styled-components";
import { ArticleBlock } from "components";
import { articles } from "components/Article";

interface ArticlesListProps {}

export const ArticlesList: React.FC<ArticlesListProps> = () => (
  <Grid>
    {articles.map(article => (
      <ArticleBlock key={article.url} article={article} />
    ))}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  max-width: 1080px;
  margin: auto;
`;
