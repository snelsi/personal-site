import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import {
  ArticlesCatalog,
  Catalog,
  ContactButton,
  Divider,
  Footer,
  GitHubBanner,
  GithubProjectsGallery,
  HireMeBanner,
  LinksBlock,
  PodcastsCatalog,
  SiteHeader,
} from "components";

import withApollo from "utils/withApollo";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Roman Zhuravlov - Personal Web Site</title>
    </Head>

    <SiteHeader />
    <main>
      <ArticlesCatalog />

      <Divider />

      <Catalog />

      <PodcastsCatalog />

      <Divider />

      <HireMeBanner />

      <Divider />

      <GithubProjectsGallery />

      <GitHubBanner />

      <LinksBlock />
    </main>

    <Footer />
    <ContactButton />
  </>
);

export default withApollo(IndexPage);
