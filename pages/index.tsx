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
        <div>
        <ArticlesCatalog />
        </div>

        <div>
        <PodcastsCatalog />
        </div>

        {/* <Block>
          <TimestampCard />
        </Block> */}


        <div>
          <HireMeBanner />
        </div>

        <div>
        <GithubProjectsGallery />
        </div>

        <div>
          <Catalog />
        </div>

        <div>
        <section>
            <GitHubBanner />
        </section>
        </div>
      </Main>
      <Footer />
      <ContactButton />
    </>
  );
};

const Main = styled.main`
  & > div {
    padding: var(--block-inner-padding);
    & > div {
      margin: auto;
      max-width: 1080px;
    }
  }

  & section {
    padding-top: 0.75em;
    padding-bottom: 6.5em;
  }
`;

export default withApollo(IndexPage);
