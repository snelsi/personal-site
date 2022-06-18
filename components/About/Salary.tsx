import * as React from "react";
import styled from "@emotion/styled";

import MUiTooltip from "@mui/material/Tooltip";

import { useInView } from "scripts";

const ToolTip = styled(MUiTooltip)`
  & .MuiTooltip-arrow {
    color: var(--color-gray-8);
  }
  & .MuiTooltip-tooltip {
    background-color: var(--color-gray-8);
    font-size: 15px;
  }
`;

interface SalaryProps {}

export const Salary: React.FC<SalaryProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      <div data-fix-width>
        <h5 data-font-size="XL">
          Desired salary{" "}
          <ToolTip arrow placement="top" title="Take-home">
            <Underlined tabIndex={0}>net</Underlined>
          </ToolTip>
          : <span className="salary">2000$ / Month</span>
        </h5>
      </div>
    </Block>
  );
};

const Underlined = styled.abbr`
  border-bottom: 2px dotted var(--color-borderline);
  outline: none;
  transition: var(--transition-ease);
  text-decoration: none;

  &:focus {
    border-bottom-color: var(--color-primary);
  }
`;

const Block = styled.div`
  margin: auto;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > div {
    border-top: 1px solid var(--color-borderline);
    border-bottom: 1px solid var(--color-borderline);
    padding: 1em 0;
    width: fit-content;
    text-align: center;

    & .salary {
      line-height: 1.5;
      white-space: nowrap;
    }
  }
`;
