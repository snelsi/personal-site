import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Image } from "components";
import { ReadTime } from "components/Blog";
import { Post } from "interfaces";

const Wrapper = styled.a`
  color: var(--color-blog-text-header);
  display: block;
  font-family: Inter, var(--sans-family);
  outline: none;

  & .post-thumbnail {
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    & > .image-container {
      transition: transform 0.5s ease-out;
      & * {
        max-width: 100%;
        min-height: 160px;
      }
    }
  }
  & .post-title {
    margin-top: 15px;
    font-size: clamp(19px, 4vw, 25px);
    font-family: Montserrat, var(--sans-family);
    transition: color 0.2s ease;
  }
  & .post-description {
    margin-top: 10px;
    font-size: clamp(16px, 4vw, 18px);
    line-height: 1.5;
    padding-right: 1em;
    max-width: 680px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }

  & .post-tags {
    align-items: center;
    color: var(--color-blog-text-header);
    font-size: 16px;
    margin-top: 14px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;

    & > span {
      display: inline-block;
      margin-top: 6px;
    }

    & .post-date {
      color: var(--color-blog-text-secondary);
      margin-right: 1em;
    }
    & .post-category {
      margin-right: 1em;
    }
  }

  &:hover,
  &:focus {
    color: var(--color-blog-text-header);
    & .post-title {
      color: var(--color-red-400);
    }
    & .post-thumbnail > .image-container {
      transform: scale(1.005);
    }
  }
  &:active {
    & .post-title {
      color: var(--color-red-500);
    }
    & .post-thumbnail > .image-container {
      transform: scale(0.998);
    }
  }
`;

interface RowPostProps {
  post: Post;
}

export const RowPost: React.FC<RowPostProps> = ({
  post: {
    link,
    title,
    thumbnail,
    thumbnailAlt = "Article thumbnail",
    description,
    date,
    category,
    readTime,
  },
  ...props
}) => (
  <Link href={link} {...props}>
    <Wrapper className="post-article" href={link} aria-label={title}>
      <article>
        <div className="post-thumbnail">
          <Image src={thumbnail} alt={thumbnailAlt} width={340} height={225} />
        </div>
        <h3 className="post-title" data-font-weight="700">
          {title}
        </h3>
        <div className="post-description">{description}</div>
        <div className="post-tags">
          <span className="post-date">{date}</span>
          {category && (
            <span className="post-category" data-font-weight={500}>
              {category}
            </span>
          )}
          <ReadTime readTime={readTime} />
        </div>
      </article>
    </Wrapper>
  </Link>
);
