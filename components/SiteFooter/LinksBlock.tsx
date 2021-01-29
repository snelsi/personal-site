import * as React from "react";
import styled from "styled-components";

const Block = styled.div`
  & > ul {
    margin-top: 32px;
    list-style: none;
    & a {
      display: block;
      margin: 0.2em 0;
      line-height: 1.5;
    }

    @media (max-width: 460px) {
      margin-top: 20px;

      display: flex;
      flex-wrap: wrap;
      & li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

interface LinksBlockProps {
  title: string;
}

export const LinksBlock: React.FC<LinksBlockProps> = ({ title, children }) => (
  <Block>
    <h3 className="montserrat" data-font-size="M">
      {title}
    </h3>
    <ul data-font-size="Focus">{children}</ul>
  </Block>
);
