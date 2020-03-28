import * as React from "react";
import styled from "styled-components";

interface MinuteOverviewProps {
  date: Date;
}
export const MinuteOverview: React.FC<MinuteOverviewProps> = ({ date }) => {
  const fillTo = date.getSeconds();
  return (
    <Row>
      {[...Array(60)].map((day, index) => (
        <Second key={index} fillTo={fillTo - index}>
          {index + 1}
        </Second>
      ))}
    </Row>
  );
};

const Row = styled.div`
  padding-left: 1em;
  margin-left: -1em;
  font-size: 1em;
  position: relative;
  flex-wrap: nowrap;
`;

interface SecondProps {
  fillTo?: number;
}
const Second = styled.span<SecondProps>`
  display: inline-block;
  position: relative;

  font-size: 1em;
  line-height: 1.8em;
  text-align: center;

  height: 1.8em;
  width: 1.8em;

  &::before {
    content: "";
    border-bottom: 2px solid black;
    position: absolute;
    transition: var(--transition-ease);
    top: 45%;
    left: 0;
    right: ${({ fillTo = 100 }) => {
      if (fillTo <= 0) return 100;
      if (fillTo >= 1) return 0;
      return fillTo;
    }}%;
  }
`;
