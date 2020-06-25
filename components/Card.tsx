import * as React from "react";
import styled from "styled-components";

import { Project } from "components/projects";

const Tag = styled.div`
  background: var(--color-red-500);
  border-radius: 6px;
  color: var(--color-text-white);

  position: absolute;
  left: 4%;
  top: 4%;
  padding: 2px 12px;

  &[data-type="Ongoing"] {
    background: var(--color-blue-500);
  }
`;

interface TagsProps {
  tags: string[];
}
const Tags: React.FC<TagsProps> = ({ tags }) => {
  if (tags.includes("New")) {
    return (
      <Tag className="tag montserrat" data-type="New">
        New
      </Tag>
    );
  }
  if (tags.includes("Ongoing")) {
    return (
      <Tag className="tag montserrat" data-type="Ongoing">
        Ongoing
      </Tag>
    );
  }

  return null;
};

const InnerContent: React.FC<Project> = ({ img, title, tags }) => (
  <>
    <div className="imageContainer">
      <img src={img} alt="Card preview" />
      <Tags tags={tags} />
    </div>
    <div className="textContainer montserrat" data-font-size="L">
      {title}

      <svg width="20" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.444 12H6.556C5.696 12 5 12.814 5 13.818v6.364C5 21.186 5.696 22 6.556 22h10.888c.86 0 1.556-.814 1.556-1.818v-6.364C19 12.814 18.304 12 17.444 12z"
          fill="#000"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7a5 5 0 1110 0v4"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </>
);

interface CardProps extends Project {
  disabled?: boolean;
}
export const Card: React.FC<CardProps> = ({ disabled = false, ...props }) => {
  if (props.url)
    return (
      <CardBase
        data-disabled={disabled}
        className={`content-card ${props.tags.join(" ")}`}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InnerContent {...props} />
      </CardBase>
    );

  return (
    <CardBase
      data-disabled={disabled}
      className={`content-card private ${props.tags.join(" ")}`}
      as="div"
    >
      <InnerContent {...props} />
    </CardBase>
  );
};

const CardBase = styled.a`
  overflow: hidden;
  text-decoration: none;
  transition: var(--transition-ease), opacity 0.2s ease-out;
  outline: none;
  color: var(--color-text-main);

  &[data-disabled="true"] {
    opacity: 0.4;
  }

  & .imageContainer {
    background: var(--color-gray-2, #dde1e6);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin-bottom: 16px;

    padding-bottom: 75%;
    height: 0;

    & img {
      object-fit: cover;
      transition: var(--transition-ease);

      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }

    &::after {
      content: "";
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }

  & .textContainer {
    & svg {
      display: inline-block;
      vertical-align: bottom;
      margin-left: 8px;
    }
  }

  &:hover {
  }

  &:not(.private) {
    &:hover,
    &:focus {
      & img {
        transform: scale(1.02);
      }
      & .textContainer {
        text-decoration: underline;
      }
    }

    & .textContainer {
      & svg {
        display: none;
      }
    }
  }
`;
