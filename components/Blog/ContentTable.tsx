import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 32px 32px 24px 32px;
  margin: 0 -4px;

  & > div {
    margin-bottom: 0.5em;
  }
  & li a {
    border-bottom: 1px dotted rgba(24, 107, 255, 0.5);
  }
`;

interface ContentTableProps {
  menu: { title: string | React.ReactElement; link: string }[];
}

export const ContentTable: React.FC<ContentTableProps> = ({ menu }) => {
  if (!menu || menu.length === 0) {
    return null;
  }
  return (
    <div>
      <Wrapper>
        <div data-font-size="focus" data-font-weight="600">
          Table of contents
        </div>
        <ul>
          {menu.map((block) => (
            <li key={block.link}>
              <a href={`#${block.link}`}>{block.title}</a>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  );
};
