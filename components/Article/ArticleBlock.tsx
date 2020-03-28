import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { IArticle } from "components/Article";
import { EyeIcon } from "components/Icons";
import { ButtonOutlined, Tag } from "components";

interface ArticleBlogProps {
  article: IArticle;
}

export const ArticleBlock: React.FC<ArticleBlogProps> = ({ article }) => {
  return (
    <Block>
      <div className="main-text">
        <Head>
          <h3>
            <a href={article.url}>{article.title}</a>
          </h3>

          <div className="tags">
            {article.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Head>
        <p>{article.textPreview}</p>
        <Link href={article.url}>
          <ButtonOutlined as="a" href={article.url} className="showMore">
            Читать Дальше
          </ButtonOutlined>
        </Link>
      </div>

      <img src={article.img} alt="article preview" />

      <div>
        <span>
          <EyeIcon size="small" />
          {article.views}
        </span>
      </div>

      <div>more</div>
    </Block>
  );
};

const Block = styled.div`
  border-bottom: 1px solid #e7e9f5;
  border-top: 1px solid #e7e9f5;
  display: grid;

  font-size: 18px;

  & .main-text {
    margin: 20px 0;
    & p {
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      color: #333;
      line-height: 1.4;

      letter-spacing: 0.018em;
      max-width: 600px;
    }
  }

  & a.showMore {
    margin-top: 1em;
  }

  @media (min-width: 720px) {
    grid-template-columns: 1fr 340px;
    grid-template-rows: 1fr 40px;
    grid-gap: 40px;
    transition: var(--transition-ease);

    & img {
      border-radius: 12px;
      margin: auto 20px;
      height: 300px;
      width: 300px;

      &:hover,
      &:focus {
        transform: scale(1.05);
      }
      &:focus {
        box-shadow: 0 0 1px 2px var(--color-blue-4);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }

  @media (max-width: 720px) {
    font-size: 16px;
    grid-template-columns: 1fr;

    & img {
      border-radius: 0px;
      height: 300px;
      width: 100%;
    }
  }
`;

const Head = styled.div`
  margin: 20px 0;
  & h3 {
    margin-bottom: 1em;
    & a {
      color: #111;
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
    margin-top: 1em;
  }
`;
