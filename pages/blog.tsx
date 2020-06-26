import * as React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { ContactButton, FunnyVideo, SiteFooter, SiteHeader } from "components";

const Main = styled.main`
  padding: 40px 0;
`;

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  height: 100%;

  & > h3 {
    margin-bottom: 20px;
    max-width: 500px;
  }

  & > p {
    margin-top: 1.5em;
  }
`;

const BlogPage: NextPage = () => (
  <>
    <NextSeo
      title="Roman Zhuravlov - Blog"
      description="My articles and thoughts."
      canonical="https://www.snelsi.now.sh/blog"
      openGraph={{
        url: "https://www.snelsi.now.sh/blog",
        title: "Roman Zhuravlov - Blog",
        type: "blog",
        description: "My articles and thoughts.",
      }}
    />

    <SiteHeader />
    <Main>
      <h2 data-fix-width>
        My Blog{" "}
        <span role="img" aria-label="Working zone">
          🚧
        </span>
      </h2>
      <Wrapper data-fix-width>
        <h3 data-font-size="XL">Articles will be back soon, and they will be gorgeous!</h3>
        <p data-font-size="Focus">
          For now, stay in touch to be first to read my new post{" "}
          <span role="img" aria-label="Cool emoji">
            😎
          </span>
          .
        </p>
      </Wrapper>
      <FunnyVideo />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

export default BlogPage;
