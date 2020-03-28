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
}

export const Gallery: React.FC<GalleryProps> = ({
  anchor,
  title,
  url,
  inner = false,
  children,
}) => (
  <Block id={anchor}>
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
    <Conveyor>{children}</Conveyor>
  </Block>
);

const Block = styled.div`
  margin-bottom: 20px;
`;

const GalleryHeader = styled(Header)`
  @media (max-width: 1120px) {
    margin: 0 var(--block-inner-padding, 1.25em);
  }

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

const Conveyor = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;

  padding: 20px var(--block-inner-padding);
  overflow: auto;
`;
