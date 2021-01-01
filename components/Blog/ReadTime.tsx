import * as React from "react";
import styled from "styled-components";
import { FiClock } from "react-icons/fi";

const Tag = styled.span`
  align-items: center;
  color: var(--color-blog-text-secondary);
  display: inline-flex !important;
  flex-wrap: nowrap;
  font-size: 0.94em;
  & * {
    min-height: 0.94em;
  }
  & svg {
    margin-right: 0.4em;
  }
`;

interface ReadTimeProps {
  readTime: number;
}

export const ReadTime: React.FC<ReadTimeProps> = ({ readTime, ...props }) => {
  if (!readTime) return null;
  return (
    <Tag className="post-read-time" title={`${readTime} minutes read`} {...props}>
      <FiClock />
      {readTime}m
    </Tag>
  );
};
