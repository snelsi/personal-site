import * as React from "react";
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
import { AboutExpress } from "components/About";
import { GithubProjectsGallery } from "components/GitHubGallery";
import withApollo from "utils/withApollo";
import { TimestampCard } from "components/Timestamp";
import { ArticlesCatalog } from "components/Articles";

import { NextPage } from "next";

const IndexPage: NextPage = () => {
  React.useEffect(() => {
    document.title = "Roman Zhuravlov - Personal Web Site";
  }, []);

  return (
    <>
      <LandingHeader />
      <Main>
        <ArticlesCatalog />

        <PodcastsCatalog />

        {/* <Block>
          <TimestampCard />
        </Block> */}

        {/* <Block>
          <AboutExpress />
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
