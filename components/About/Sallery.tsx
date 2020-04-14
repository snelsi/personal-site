import * as React from "react";
import styled from "styled-components";

import Tippy from "@tippyjs/react";

interface SalleryProps {}

export const Sallery: React.FC<SalleryProps> = () => (
  <div className="block">
    <Block>
      <h5>
        Желаемая зарплата{" "}
        <Tippy content="На руки">
          <Underlined tabIndex={0}>net</Underlined>
        </Tippy>
        : <span className="no-wrap">750$ / мес</span>
      </h5>
    </Block>
  </div>
);

const Underlined = styled.span`
  border-bottom: 2px dotted var(--color-borderline);
  outline: none;
  transition: var(--transition-ease);

  &:focus {
    border-bottom-color: var(--color-blue-6);
  }
`;

const Block = styled.div`
  border-top: 1px solid var(--color-borderline);
  border-bottom: 1px solid var(--color-borderline);
  padding: 0 24px;
  width: fit-content;
  margin: auto;
`;
