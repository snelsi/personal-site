import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Image } from "components";
import { Post } from "interfaces";

const Wrapper = styled.a`
  color: var(--color-text);
  display: block;
  max-width: 82vw;

  & .post-thumbnail {
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    & > .image-container * {
      max-width: 100%;
      min-height: 160px;
    }
  }
  & .post-category {
    color: var(--color-gray-6);
    margin-top: 14px;
    margin-bottom: 10px;
    height: 20px;
    line-height: 20px;
  }
  & .post-title {
    margin-top: 0.5em;
    font-size: clamp(19px, 4vw, 25px);
    font-family: Montserrat, var(--sans-family);
  }
`;

interface RowPostProps {
  post: Post;
}

export const RowPost: React.FC<RowPostProps> = ({
  post: { link, title, thumbnail, thumbnailAlt = "Article thumbnail", category },
}) => {
  return (
    <Link href={link}>
      <Wrapper className="post-article" href={link}>
        <article>
          <div className="post-thumbnail">
            <Image src={thumbnail} alt={thumbnailAlt} width={340} height={225} />
          </div>
          <h3 className="post-title">{title}</h3>
          <div className="post-category">{category}</div>
        </article>
      </Wrapper>
    </Link>
  );
};
