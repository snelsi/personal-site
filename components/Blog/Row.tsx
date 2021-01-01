import * as React from "react";
import styled from "styled-components";

import { Post } from "interfaces";
import { RowPost } from "./RowPost";

const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  & > ul {
    display: grid;
    gap: clamp(12px, 4vw, 20px);
    grid-auto-flow: column;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 1440px;
    padding: 20px 5vw;
    width: max-content;

    & a {
      max-width: 82vw;
    }

    @media (min-width: 1000px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 999px) {
    &[data-length="1"] {
      & > ul {
        grid-template-columns: 1fr;
        & a {
          max-width: 90vw;
        }
      }
    }
  }
`;

interface RowProps {
  posts: Post[];
}

export const Row: React.FC<RowProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;
  return (
    <Wrapper className="row" data-length={posts.length}>
      <ul className="frame">
        {posts.map((post) => (
          <li key={post.link}>
            <RowPost post={post} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
