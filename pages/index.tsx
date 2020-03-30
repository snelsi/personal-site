import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import {
  Catalog,
  ContactButton,
  LandingHeader,
  Footer,
  GitHubBanner,
  HireMeBanner,
  PodcastsCatalog,
} from "components";

import { GithubProjectsGallery } from "components/GitHubGallery";
import withApollo from "utils/withApollo";

import { ArticlesCatalog } from "components/Articles";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roman Zhuravlov - Personal Web Site</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#262626" />
      </Head>
      <LandingHeader />
      <Main>
        <ArticlesCatalog />

        <PodcastsCatalog />

        {/* <Block>
          <TimestampCard />
        </Block> */}


        <Block>
          <HireMeBanner />
        </Block>

        <GithubProjectsGallery />

        <Block>
          <Catalog />
        </Block>

        <section>
          <Block>
            <GitHubBanner />
          </Block>
        </section>
      </Main>
      <Footer />
      <ContactButton />
    </>
  );
};

const Main = styled.main`
  padding: 1.25em 0;

  & section {
    padding-top: 0.75em;
    padding-bottom: 6.5em;
  }
`;

const Block = styled.div`
  margin: auto;
  max-width: 1080px;
  padding: var(--block-inner-padding);
`;

export default withApollo(IndexPage);
