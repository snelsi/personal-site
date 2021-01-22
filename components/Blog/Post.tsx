import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Post as IPost } from "interfaces";
import { Image } from "components";

const Wrapper = styled.a`
  color: var(--color-text);
  display: block;
  font-family: Montserrat, var(--sans-family);

  & article {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: clamp(16px, 5vw, 28px);
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
    & .post-thumbnail {
      border-radius: 10px;
      overflow: hidden;

      max-width: 420px;
      width: 100%;
      & > .image-container * {
        max-width: 100%;
        min-height: 160px;
      }
    }
    & .post-content {
      & .post-title {
      }
      & p {
        font-family: Inter, var(--sans-family);
        margin-top: 1em;
        max-width: 680px;
      }
    }
  }
`;

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({
  post: { link, title, description, thumbnail, thumbnailAlt = "Article thumbnail" },
}) => {
  return (
    <div>
      <Link href={link}>
        <Wrapper className="post-article" href={link} aria-label={title}>
          <article>
            <div className="post-thumbnail">
              <Image src={thumbnail} alt={thumbnailAlt} width={340} height={225} />
            </div>
            <div className="post-content">
              <h3 className="post-title">{title}</h3>
              <p data-font-size="Focus">{description}</p>
            </div>
          </article>
        </Wrapper>
      </Link>
    </div>
  );
};
