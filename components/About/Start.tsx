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
  max-width: 80%;
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
          I&apos;m a web developer since 2019. After a couple of years of writing C++ console
          programs, making a real interface in the browser was a miracle. When I learned React and
          Typescript it was the moment I knew: I will never come back to desktop development. Now I
          create beautiful cross-platform web-programs, modern sites, landings, and games online.
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
