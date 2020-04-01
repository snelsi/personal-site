import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IArticle } from "components/Articles";
import { ButtonOutlined, Tag } from "components";

interface ArticleBlogProps {
  article: IArticle;
}

export const ArticleBlock: React.FC<ArticleBlogProps> = ({ article }) => (
  <Block>
    <MainContent>
      <Head>
        <h3>
          <Link href={`articles/${article.id}`}>
            <a href={`articles/${article.id}`}>{article.title}</a>
          </Link>
        </h3>

        <div className="tags">
          {article.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Head>

      <p>{article.textPreview}</p>

      <Link href={`articles/${article.id}`}>
        <ButtonOutlined as="a" href={`articles/${article.id}`} className="showMore">
          Читать Дальше
        </ButtonOutlined>
      </Link>
    </MainContent>

    <Link href={`articles/${article.id}`}>
      <AsideImage href={`articles/${article.id}`}>
        <img src={article.img} alt="article preview" />
      </AsideImage>
    </Link>
  </Block>
);

const Block = styled.div`
  border-bottom: 1px solid #e7e9f5;
  border-top: 1px solid #e7e9f5;
  display: grid;

  font-size: 1.125rem;

  max-width: 1200px;
  margin: auto;
  width: 100%;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 400px;
    grid-gap: 2.5rem;
    transition: var(--transition-ease);
  }

  @media (max-width: 720px) {
    font-size: 1rem;
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  padding: 20px 0;
  & p {
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    color: var(--color-text-main);
    line-height: 1.4;

    letter-spacing: 0.018em;
    max-width: 600px;
  }

  @media (max-width: 720px) {
    padding: 1.25rem;
  }

  & a.showMore {
    margin: 1em 0;
  }
`;

const Head = styled.div`
  margin-bottom: 1.25rem;
  @media (min-width: 720px) {
    margin-top: 1.25rem;
  }

  & h3 {
    margin-bottom: 1rem;
    & a {
      color: var(--color-text-main);
      transition: var(--transition-ease);

      &:hover {
        color: var(--color-blue-6);
      }
      &:active {
        color: var(--color-blue-7);
      }
    }
  }
  & .tags {
    display: flex;
    margin-top: 1.5rem;
  }
`;

const AsideImage = styled.a`
  & > img {
    border-radius: 12px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 720px) {
    margin: auto 20px;
    height: 360px;
    width: 360px;
    transition: var(--transition-ease);

    &:hover,
    &:focus {
      transform: scale(1.04);
    }
    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 720px) {
    grid-row-start: 1;

    height: 300px;
    width: 100%;
    & > img {
      border-radius: 0px;
    }
  }
`;
