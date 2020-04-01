import * as React from "react";
import styled from "styled-components";
import { ArticleBlock, myArticles } from "components/Articles";

interface ArticlesListProps {}

export const ArticlesList: React.FC<ArticlesListProps> = () => (
  <Grid>
    {myArticles.map(article => (
      <ArticleBlock key={article.id} article={article} />
    ))}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  padding: 0 1.25rem;

  @media (max-width: 720px) {
    padding: 0;
  }
`;
