import * as React from "react";
import { NextPage } from "next";

import { MainPreview } from "components/PagePreviews";

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
    <MainPreview />

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
