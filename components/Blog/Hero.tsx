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
  margin-bottom: clamp(20px, 5vw, 40px);
  overflow: hidden;
  outline: none;

  & .hero-thumbnail {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 100%;
    & > .image-container {
      transition: transform 0.5s ease-out;
      & * {
        max-width: 100%;
        min-height: 160px;
      }
    }
  }
  & .hero-title {
    font-size: clamp(20px, 4vw, 48px);
    font-family: Montserrat, var(--sans-family);
    margin-top: max(0.6em, 15px);
    transition: color 0.2s ease;
  }
  & .hero-sub-title {
    line-height: calc(2px + 2ex + 2px);
    font-family: Montserrat, var(--sans-family);
    font-size: clamp(18px, 4vw, 22px);
    max-width: 100%;
    margin: 1em 0 0;
  }
  & .hero-description {
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
  & .hero-tags {
    margin-top: 14px;
    margin-bottom: 20px;

    color: var(--color-blog-text-header);

    & > span {
      display: inline-block;
      margin-top: 6px;
    }

    & .hero-date {
      color: var(--color-blog-text-secondary);
      margin-right: 1em;
    }
    & .hero-category {
      margin-right: 1em;
    }
  }

  &:hover,
  &:focus {
    color: var(--color-blog-text-header);
    & .hero-title {
      color: var(--color-red-400);
    }
    & .hero-thumbnail > .image-container {
      transform: scale(1.005);
    }
  }
  &:active {
    & .hero-title {
      color: var(--color-red-500);
    }
    & .hero-thumbnail > .image-container {
      transform: scale(0.998);
    }
  }
`;

const Tag = styled.div`
  background: var(--color-red-500);
  border-radius: 6px;
  color: var(--color-text-white);

  font-size: clamp(15px, 4vw, 18px);
  font-weight: 500;
  font-variation-settings: "wght" 500;
  position: absolute;
  right: clamp(16px, 4%, 40px);
  top: clamp(16px, 4%, 40px);
  padding: 2px 12px;
`;

interface HeroProps {
  post: Post;
  priority?: boolean;
  showSubTitle?: boolean;
  showDescription?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  post: {
    link,
    title,
    subTitle,
    thumbnail,
    thumbnailAlt = "Article thumbnail",
    date,
    category,
    readTime,
    description,
  },
  priority = true,
  showSubTitle = false,
  showDescription = false,
}) => {
  return (
    <Link href={link}>
      <Wrapper className="hero-article" href={link} aria-label={title}>
        <article>
          <div className="hero-thumbnail">
            <Image
              src={thumbnail}
              alt={thumbnailAlt}
              width={1440}
              height={400}
              priority={priority}
            />
            <Tag>New</Tag>
          </div>
          <h2 className="hero-title">{title}</h2>
          {subTitle && showSubTitle && (
            <div className="hero-sub-title" data-font-weight="600">
              {subTitle}
            </div>
          )}
          {description && showDescription && <p className="hero-description">{description}</p>}
          <div className="hero-tags">
            <span className="hero-date">{date}</span>
            {category && (
              <span className="hero-category" data-font-weight={500}>
                {category}
              </span>
            )}
            <ReadTime readTime={readTime} />
          </div>
        </article>
      </Wrapper>
    </Link>
  );
};
