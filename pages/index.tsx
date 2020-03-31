import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import {
  Catalog,
  ContactButton,
  Divider,
  LandingHeader,
  Footer,
  GitHubBanner,
  HireMeBanner,
  LinksBlock,
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

        <Divider />

        <div>
          <Catalog />
        </div>

        <div>
          <PodcastsCatalog />
        </div>

        <Divider />

        <div>
          <HireMeBanner />
        </div>

        <Divider />

        <div>
          <GithubProjectsGallery />
        </div>

        <div>
          <section>
            <GitHubBanner />
          </section>
        </div>

        <div>
          <LinksBlock />
        </div>
      </Main>
      <Footer />
      <ContactButton />
    </>
  );
};

const Main = styled.main`
  padding: 20px 0;

  & > div {
    padding: 0 var(--block-inner-padding);
    & > div {
      margin: auto;
      max-width: 1200px;
    }
  }

  & section {
    padding: 1em 0;

    @media (min-width: 720px) {
      padding-bottom: 6.5em;
    }
  }
`;

export default withApollo(IndexPage);
