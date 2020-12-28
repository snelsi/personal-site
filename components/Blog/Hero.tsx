import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Image } from "components";
import { Post } from "interfaces";

const Wrapper = styled.a`
  color: var(--color-text);
  display: block;
  font-family: Montserrat, var(--sans-family);
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
    margin-top: 0.6em;
    transition: color 0.2s ease;
  }
  & .hero-tags {
    margin-top: 20px;
    margin-bottom: 20px;

    color: var(--color-text-main);
    font-family: Inter, var(--sans-family);

    & .hero-date {
      color: #888;
      margin-right: 1em;
    }
  }

  &:hover,
  &:focus {
    color: var(--color-text);
    & .hero-title {
      color: var(--color-red-400);
    }
    & .hero-thumbnail > .image-container {
      transform: scale(1.005);
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
}

export const Hero: React.FC<HeroProps> = ({
  post: { link, title, thumbnail, thumbnailAlt = "Article thumbnail", date, category },
  priority = true,
}) => {
  return (
    <Link href={link}>
      <Wrapper className="hero-article" href={link}>
        <article>
          <div className="hero-thumbnail">
            <Image
              src={thumbnail}
              alt={thumbnailAlt}
              width={1080}
              height={400}
              priority={priority}
            />
            <Tag>New</Tag>
          </div>
          <h2 className="hero-title">{title}</h2>
          <div className="hero-tags">
            <span className="hero-date">{date}</span>
            {category && (
              <span className="hero-category" data-font-weight={500}>
                {category}
              </span>
            )}
          </div>
        </article>
      </Wrapper>
    </Link>
  );
};
