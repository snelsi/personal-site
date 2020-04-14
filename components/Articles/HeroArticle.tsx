import * as React from "react";
import styled from "styled-components";

import Link from "next/link";
import { IArticle } from "components/Articles";

interface HeroArticleProps {
  article: IArticle;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({ article }) => (
  <div>
    <Link href={`articles/${article.id}`}>
      <Container href={`articles/${article.id}`}>
        <img src={article.img} alt="Article preview" />
        <div className="card-main">
          <h3>{article.title}</h3>
        </div>
      </Container>
    </Link>
  </div>
);

const Container = styled.a`
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  margin-bottom: 2rem;

  & > img {
    border-radius: 0.5rem;
    object-fit: cover;
    height: 400px;
    width: 100%;
  }

  & > .card-main {
    padding: 1.5rem;
    padding-left: 4.5rem;

    & > h3 {
      color: var(--color-text-main);
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  &:hover {
    & > .card-main {
      padding: 1.5rem;
      padding-left: 4.5rem;

      & > h3 {
        text-decoration: underline;
      }
    }
  }
`;
