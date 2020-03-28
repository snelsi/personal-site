import * as React from "react";
import styled from "styled-components";

interface SalleryProps {}

export const Sallery: React.FC<SalleryProps> = () => (
  <div className="block">
    <Block>
      <h5>
        Желаемая зарплата <Underlined title="На руки">net</Underlined>:{" "}
        <span className="no-wrap">750$ / мес</span>
      </h5>
    </Block>
  </div>
);

const Underlined = styled.span`
  border-bottom: 2px dotted var(--color-gray-5);
`;

const Block = styled.div`
  border-top: 1px solid #e7e9f5;
  border-bottom: 1px solid #e7e9f5;
  padding: 0 24px;
  width: fit-content;
  margin: auto;
`;
