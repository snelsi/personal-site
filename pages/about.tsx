import * as React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { About } from "components/About";

const AboutPage: NextPage = () => {
  React.useEffect(() => {
    document.title = "Roman Zhuravlov - Bio";
  }, []);

  return (
    <Container>
      <About />
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25em;
`;
export default AboutPage;
