import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import { Image } from "components";
import { useInView } from "scripts";

const Block = styled.div`
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  margin-right: auto;
  max-width: min(88%, 1200px);
  @media (max-width: 800px) {
    padding: 0 4vw;
  }
`;

interface StartProps {}

export const Start: React.FC<StartProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");
  const { visible, ref } = useInView();

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      <div className="text-block">
        <h3>The Long Journey</h3>
        <p>
          I&apos;m a web developer since 2019. After a couple of years of writing C++{" "}
          <a
            href="https://github.com/snelsi/Numerical-analysis-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            console
          </a>{" "}
          <a href="https://github.com/snelsi/2048" target="_blank" rel="noopener noreferrer">
            programs
          </a>
          , making a real interface in the browser was a miracle. When I learned React and
          Typescript it was the moment I knew: I will never come back to desktop development. Now I
          create{" "}
          <a href="https://tulpan.snelsi.now.sh/" target="_blank" rel="noopener noreferrer">
            beautiful
          </a>{" "}
          cross-platform web-programs,{" "}
          <a href="https://medspravki.snelsi.vercel.app/" target="_blank" rel="noopener noreferrer">
            modern sites
          </a>
          , landings, and games online.
        </p>
      </div>
      <Wrapper>
        <Image
          src="about/programming.jpg"
          alt="Web programming"
          width={mobile ? 900 : 1636}
          height={1080}
        />
      </Wrapper>
    </Block>
  );
};
