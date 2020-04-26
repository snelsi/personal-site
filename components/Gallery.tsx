import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import { FiPaperclip, FiChevronRight } from "react-icons/fi";
import { ButtonText, IconButton, Header } from "components";

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
    <Header data-fix-width>
      <HeaderTitle data-anchor={anchor}>
        {title}
        <IconButton
          className="clip"
          type="button"
          data-size="medium"
          onClick={() => navigator.clipboard.writeText(`http://snelsi.now.sh/#${anchor}`)}
          aria-label="Copy Link to Clipboard"
        >
          <FiPaperclip />
        </IconButton>
      </HeaderTitle>

      {url && inner ? (
        <Link href={url}>
          <ButtonText component="a" href={url}>
            See All
            <FiChevronRight size={20} strokeWidth={1.5} />
          </ButtonText>
        </Link>
      ) : (
        <ButtonText component="a" href={url} target="_blank" rel="noopener noreferrer">
          See All
          <FiChevronRight size={20} strokeWidth={1.5} />
        </ButtonText>
      )}
    </Header>
    <Frame data-mode={fullScreen ? "fullScreen" : "normal"}>
      <div className="conveyor">{children}</div>
    </Frame>
  </div>
);

const HeaderTitle = styled.h5`
  align-items: baseline;
  display: flex;
  line-height: inherit;
  flex-wrap: nowrap;

  & > button.clip {
    margin-left: 4px;
    opacity: 0;
  }
  &:hover > button.clip,
  &:focus-within > button.clip {
    opacity: 1;
  }
`;

const Frame = styled.div`
  overflow-x: auto;
  width: 100%;

  -webkit-overflow-scrolling: touch;

  & > .conveyor {
    display: grid;
    grid-gap: 16px;
    grid-auto-flow: column;

    width: fit-content;

    padding: 12px 20px 16px;

    /* Hide  overflowing cards on desktop */
    @media (min-width: 1070px) {
      & > .content-card {
        display: none;
      }

      & > .content-card:nth-child(-n + 3) {
        display: grid;
      }

      @media (min-width: 1240px) {
        & > .content-card:nth-child(4) {
          display: grid;
        }
      }

      @media (min-width: 1540px) {
        & > .content-card:nth-child(5) {
          display: grid;
        }
      }

      @media (min-width: 1840px) {
        & > .content-card:nth-child(6) {
          display: grid;
        }
      }
    }
  }
`;
