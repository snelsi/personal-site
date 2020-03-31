import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ButtonText, IconButton } from "components";
import { Header } from "components/Header";

interface GalleryProps {
  anchor: string;
  title: string;
  url?: string;
  inner?: boolean;
  fullScreen?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({
  anchor,
  title,
  url,
  inner = false,
  children,
  fullScreen = false,
}) => (
  <div id={anchor}>
    <GalleryHeader>
      <h4 data-anchor={anchor}>
        {title}
        <IconButton
          className="clip"
          type="button"
          onClick={() => navigator.clipboard.writeText(`http://localhost:3000/#${anchor}`)}
        >
          <img src="static/icons/paperclip.svg" alt="paperclip" />
        </IconButton>
      </h4>

      {url && inner ? (
        <Link href={url}>
          <ButtonText as="a" href={url}>
            See All
          </ButtonText>
        </Link>
      ) : (
        <ButtonText as="a" href={url} target="_blank" rel="noopener noreferrer">
          See All
        </ButtonText>
      )}
    </GalleryHeader>
    <Frame data-mode={fullScreen ? "fullScreen" : "normal"}>
      <div className="conveyor">{children}</div>
    </Frame>
  </div>
);

const GalleryHeader = styled(Header)`
  & h4 {
    align-items: baseline;
    display: flex;
    line-height: inherit;
    flex-wrap: nowrap;

    & > button.clip {
      --base-color: 200, 200, 200;
      margin-left: 4px;
      opacity: 0;
      & img {
        height: 20px;
        width: 20px;
      }
    }
    &:hover > button.clip,
    &:focus-within > button.clip {
      opacity: 1;
    }
  }
`;

const Frame = styled.div`
  overflow-x: auto;
  width: 100%;

  -webkit-overflow-scrolling: touch;

  & > .conveyor {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;

    padding: 20px 0;
    width: fit-content;
  }

  &[data-mode="fullScreen"] {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    & > .conveyor {
      padding: 20px var(--block-inner-padding);

      /* Hide  overflowind cards on desktop */
      @media (min-width: 1070px) {
        @media (max-width: 1590px) {
          & > .content-card:nth-child(6) {
            display: none;
          }
        }
        @media (max-width: 1590px) {
          & > .content-card:nth-child(6) {
            display: none;
          }
        }
        @media (max-width: 1330px) {
          & > .content-card:nth-child(5) {
            display: none;
          }
        }
      }
    }
  }
`;
