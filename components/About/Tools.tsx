import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts";
import { Tool } from "./Tool";

const Wrapper = styled.div`
  margin: 10vw 0;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 2em;

  & > .text-block {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0em;
    & > h4 {
      margin-bottom: 0.75em;
    }

    & > p {
      max-width: 500px;
      margin: auto;
      line-height: 1.5;
    }

    @media (max-width: 1020px) {
      text-align: left;
    }
  }
`;

const Container = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 15px;
  -webkit-overflow-scrolling: touch;

  & > div {
    padding: 0 5%;
    width: max-content;
    margin: auto;
  }
`;

const Grid = styled.ul`
  background-color: var(--color-gray-1);
  background-color: #f8f8fa;
  border-radius: 64px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: 80px;
  width: max-content;
  margin: auto;
  padding: 32px 48px;

  @media (max-width: 1020px) {
    gap: 64px;
  }
`;

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => {
  const { ref, visible } = useInView();

  return (
    <Wrapper ref={ref} data-visible={visible}>
      <Text data-fix-width>
        <div className="text-block">
          <h4 data-font-size="XL" className="montserrat">
            My Tools
          </h4>
          <p data-font-size="Focus">
            Time and patience are the key to everything. But sometimes right tool does half of the
            job.
          </p>
        </div>
      </Text>

      <Container>
        <div>
          <Grid>
            <Tool src="images/about/tools/VSCode.svg" alt="VSCode" title="VS Code" />
            <Tool src="images/about/tools/Figma.svg" alt="Figma" title="Figma" />
            <Tool src="images/about/tools/Photoshop.svg" alt="Photoshop" title="Photoshop" />
            <Tool src="images/about/tools/Illustrator.svg" alt="Illustrator" title="Illustrator" />
          </Grid>
        </div>
      </Container>
    </Wrapper>
  );
};
