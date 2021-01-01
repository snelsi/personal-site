import * as React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import { ContactButton, SiteFooter, SiteHeader } from "components";
import { getPosts } from "scripts/postsApi";

import { useInView } from "scripts";
import { Post as IPost } from "interfaces";
import { Hero, Row, Post, BlogFooter } from "components/Blog";
import { HireMeBanner } from "components/Banners/HireMe";

const Main = styled.main`
  padding: 40px 0;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Layout = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
  overflow: hidden;

  & li {
    display: block;
  }
  & li[data-type="hero"] {
    border-bottom: 1px solid var(--color-borderline);
  }
  & li[data-type="banner"] {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  & li[data-type="post"]:not(:last-of-type) > div {
    border-bottom: 1px solid var(--color-borderline);
    max-width: 920px;
    margin-left: 0;
    margin-right: auto;
    padding-top: 4px;
    padding-bottom: 24px;
  }
`;

interface Block {
  type: "hero" | "row" | "post" | "banner";
  children: React.ReactElement;
  wide?: boolean;
}
interface BlogPageProps {
  posts: IPost[];
}
const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const blocks = React.useMemo(() => {
    if (!posts || posts.length === 0) return [];
    const blocks: Block[] = [];
    let postsArray = [...posts];

    const hero = postsArray.shift();
    blocks.push({
      type: "hero",
      children: <Hero key={hero.link} post={hero} />,
    });

    if (postsArray.length > 0) {
      blocks.push({ type: "row", children: <Row posts={postsArray.slice(0, 3)} />, wide: true });
      postsArray = postsArray.slice(3);
    }

    blocks.push({ type: "banner", children: <HireMeBanner /> });

    if (postsArray.length > 0) {
      postsArray.forEach((post) => blocks.push({ type: "post", children: <Post post={post} /> }));
    }

    return blocks;
  }, [posts]);

  const { visible, ref } = useInView();

  return (
    <>
      <NextSeo
        title="Roman Zhuravlov - Blog"
        description="My articles and thoughts."
        canonical="https://snelsi.com/blog"
        openGraph={{
          url: "https://snelsi.com/blog",
          title: "Roman Zhuravlov - Blog",
          type: "blog",
          description: "My articles and thoughts.",
        }}
      />

      <SiteHeader />
      <Main ref={ref} data-visible={visible}>
        <Layout>
          {blocks.map(({ type, children, wide }, i) => (
            <li key={i} data-type={type} data-fix-width={!wide}>
              {children}
            </li>
          ))}
        </Layout>
        <BlogFooter />
      </Main>

      <SiteFooter />
      <ContactButton />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts([
    "slug",
    "link",
    "title",
    "subTitle",
    "date",
    "thumbnail",
    "thumbnailAlt",
    "description",
    "date",
    "readTime",
    "category",
  ]);

  return {
    props: { posts },
  };
};

export default BlogPage;
