import * as React from "react";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import remarkSlug from "remark-slug";

import { Post } from "interfaces";
import { Image, SiteFooter, SiteHeader } from "components";
import { Article } from "components/Article";
import { ContentTable } from "components/Blog/ContentTable";
import { getPosts, getPostBySlug } from "scripts/postsApi";

const components = {
  ContentTable,
};

const Main = styled.main`
  padding: 2em 0;
`;

const Header = styled.div`
  & .post-thumbnail {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    width: 100%;

    & > .image-container {
      transition: transform 0.5s ease-out;
      & * {
        max-width: 100%;
        min-height: 160px;
      }
    }
  }
  & .post-tags {
    margin-top: 20px;
    margin-bottom: 20px;

    color: var(--color-text-main);

    & .post-date {
      color: #888;
      margin-right: 1em;
    }
  }
  & .post-title {
    font-size: clamp(20px, 8vw, 72px);
    line-height: calc(2px + 2ex + 2px);
    max-width: 100%;
    margin: 0;
  }
  & .post-sub-title {
    line-height: calc(2px + 2ex + 2px);
    max-width: 100%;
    margin: 1em 0 0;
  }
`;

interface BlogPostProps {
  source: any;
  post: Post;
  slug: string;
}
const BlogPost: React.FC<BlogPostProps> = ({ source, post, slug }) => {
  const content = hydrate(source, { components });

  const { title, subTitle, thumbnail, thumbnailAlt = "Article thumbnail", date, category } =
    post || {};

  return (
    <>
      <NextSeo
        title={title || "Roman Zhuravlov - Blog"}
        canonical={`https://www.snelsi.now.sh/${slug}`}
        openGraph={{
          url: `https://www.snelsi.now.sh/${slug}`,
          title: title || "Roman Zhuravlov - Blog",
          type: "blog",
        }}
      />

      <SiteHeader />

      <Main>
        {post && (
          <Article>
            <Header data-full-width>
              <div data-fix-width>
                <h1 className="post-title">{title}</h1>
                {subTitle && <h2 className="post-sub-title">{subTitle}</h2>}
                <div className="post-tags">
                  <span className="post-date">{date}</span>
                  <span className="post-category" data-font-weight={500}>
                    {category}
                  </span>
                </div>
                <div className="post-thumbnail">
                  <Image src={thumbnail} alt={thumbnailAlt} width={1080} height={400} priority />
                </div>
              </div>
            </Header>
            {content}
          </Article>
        )}
      </Main>

      <SiteFooter />
    </>
  );
};

export async function getStaticPaths() {
  const posts = getPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slug) return null;

  const post = getPostBySlug(slug, [
    "slug",
    "link",
    "content",
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
  if (!post) return null;

  const mdxSource = await renderToString(post.content, {
    components,
    mdxOptions: { remarkPlugins: [remarkSlug] },
  });
  return { props: { source: mdxSource, post, slug } };
}

export default BlogPost;
