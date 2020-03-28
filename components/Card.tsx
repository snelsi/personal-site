import * as React from "react";
import styled from "styled-components";

import { EyeIcon } from "components/Icons";

interface CardProps {
  url: string;
  inner?: boolean;
  img: string;
  title: string;
  description?: string;
  tag: "Article" | "Podcast" | "GitHub";

  minutesToRead?: number;
  words?: number;
  views?: number;
  stars?: number;
}

export const Card: React.FC<CardProps> = ({
  url,
  inner = true,
  tag,
  img,
  title,
  description,
  minutesToRead,
  words,
  views,
  stars,
}) => (
  <CardBase href={url} target={inner ? "_self" : "_blank"} rel="noopener noreferrer">
    <div className="imageContainer">
      <img src={img} alt="Article" />
      <span>{tag}</span>
    </div>
    <div className="textContainer">
      <div className="cardMain">
        <div className="cardTitle">{title}</div>
        {description && <p>{description}</p>}
      </div>
      <div className="cardFooter footnote">
        {minutesToRead && <span>{minutesToRead} min</span>}
        {words && <span>{words} words</span>}
        {views && (
          <span>
            <EyeIcon size="small" />
            {views}
          </span>
        )}
        {stars && (
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {stars}
          </span>
        )}
      </div>
    </div>
  </CardBase>
);

const CardBase = styled.a`
  background: #ffffff;
  box-shadow: 0px 6px 12px rgba(0, 0, 100, 0.1);
  border-radius: 8px;
  display: grid;
  grid-template-rows: 148px 1fr;
  overflow: hidden;
  font-size: 1rem;
  min-height: 240px;
  min-width: 200px;
  text-decoration: none;
  transition: var(--transition-ease);
  outline: none;

  grid-template-rows: 200px 1fr;
  min-height: 320px;
  min-width: 240px;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:focus {
    box-shadow: 0 0 1px 2px var(--color-blue-4);
  }
  &:active {
    transform: scale(0.98);
  }

  & .imageContainer {
    background: var(--color-cool-gray-2, #dde1e6);
    border-radius: 8px;
    margin: 4px;
    overflow: hidden;
    position: relative;

    & img {
      display: block;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    & span {
      background: rgba(38, 38, 38, 0.25);
      border-radius: 4px;
      color: var(--color-text-white);
      position: absolute;
      left: 4px;
      top: 6px;
      padding: 2px 12px;
    }
  }

  & .textContainer {
    padding: 8px 12px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    & .cardMain {
      transition: all var(--transition-ease);
      font-size: 1em;
      color: var(--color-cool-gray-10, #121619);

      & .cardTitle {
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        display: -webkit-box;
        font-weight: 500;
        overflow: hidden;
      }
      & p {
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        display: -webkit-box;
        font-weight: 400;
        margin-top: 4px;
        opacity: 0.9;
        overflow: hidden;
      }
    }
    & .cardFooter {
      align-items: center;
      display: flex;
      color: var(--color-cool-gray-6, #697077);
      margin-top: 8px;

      & span {
        align-items: center;
        display: flex;
        & svg {
          display: inline-block;
          margin-right: 4px;
        }
        &:not(:first-child) {
          margin-left: 8px;
        }
      }
    }
  }
`;
