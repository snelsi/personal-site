import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import { LinksBlock } from "components";
import { Header } from "components/LandingHeader/Header";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Header />
      <Container>
        <LinksBlock />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1.25em;
`;
export default AboutPage;
