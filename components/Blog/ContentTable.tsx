import * as React from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { FiChevronDown } from "react-icons/fi";

const Wrapper = styled.nav`
  --padding: clamp(16px, 4vw, 32px);
  max-width: 100%;
  overflow: hidden;

  & > div {
    margin-left: -4px;
    margin-right: -4px;
    & .MuiAccordion-root {
      background-color: #f8f9fa;
      border-radius: 10px;
      box-shadow: none;
      padding: 0;

      & .MuiAccordionSummary-root {
        padding-left: var(--padding);
        padding-right: var(--padding);
        min-height: 60px;
        & .MuiAccordionSummary-content {
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 8px;
        }
        & .MuiAccordionSummary-expandIcon {
          color: var(--color-text-secondary);
        }
        &.Mui-focused {
          background-color: transparent;
          & .MuiAccordionSummary-expandIcon {
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
      }
      & .MuiAccordionDetails-root {
        padding: 0 var(--padding) 24px;
        & ul {
          font-size: 16px;
          line-height: 32px;
          margin-top: 0;
          margin-bottom: 0;
          & ul {
            margin-top: 4px;
            margin-bottom: 4px;
          }
          & li {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 8px;
            & a {
              border-bottom: 1px dotted rgba(24, 107, 255, 0.5);
            }
          }
        }
      }
    }
  }
`;

interface Link {
  title: string | React.ReactElement;
  link: string;
}
type List = Link[];
interface ContentTableProps {
  menu: List;
  initialState?: boolean;
}

interface BlockProps {
  block: List | Link;
  level?: number;
}
const Block: React.FC<BlockProps> = ({ block, level = 0, ...props }) => {
  if (Array.isArray(block)) {
    return (
      <ul data-level={level} {...props}>
        {block.map((b) => (
          <li key={b.link || String(b.title)}>
            <Block block={b} level={level + 1} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <a href={`#${block?.link}`} {...props}>
      {block?.title}
    </a>
  );
};

export const ContentTable: React.FC<ContentTableProps> = ({
  menu,
  initialState = true,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(initialState);

  const handleChange = () => setExpanded((exp) => !exp);

  if (!menu || menu.length === 0) {
    return null;
  }
  return (
    <Wrapper {...props}>
      <div>
        <Accordion expanded={expanded} onChange={handleChange}>
          <AccordionSummary
            expandIcon={<FiChevronDown />}
            aria-controls="content-table"
            id="content-table"
          >
            <div data-font-size="focus" data-font-weight="600">
              Table of contents
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Block block={menu} />
          </AccordionDetails>
        </Accordion>
      </div>
    </Wrapper>
  );
};
