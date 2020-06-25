import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import { Image } from "components";

const Wrapper = styled.div`
  margin-right: auto;
  max-width: 80%;
`;

interface StartProps {}

export const Start: React.FC<StartProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");

  return (
    <div className="block">
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
          ratio={mobile ? 120 : 66}
        />
      </Wrapper>
    </div>
  );
};
