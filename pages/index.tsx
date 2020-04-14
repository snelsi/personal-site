import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import {
  Catalog,
  ContactButton,
  Divider,
  Footer,
  GitHubBanner,
  HireMeBanner,
  LinksBlock,
  PodcastsCatalog,
} from "components";

import { SiteHeader } from "components/SiteHeader";

import { GithubProjectsGallery } from "components/GitHubGallery";
import withApollo from "utils/withApollo";

import { ArticlesCatalog } from "components/Articles";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roman Zhuravlov - Personal Web Site</title>
      </Head>

      <SiteHeader />
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
