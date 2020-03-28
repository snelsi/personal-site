import * as React from "react";
import { NextPage, NextPageContext } from "next";

import Link from "next/link";
import {} from "components";

interface PodcastProps {
  podcastId: string;
}
const Podcast: NextPage<PodcastProps> = ({ podcastId }) => {
  React.useEffect(() => {
    document.title = "Podcast";
  }, []);

  return (
    <>
      <Link href="/articles">
        <a href="/articles">Назад</a>
      </Link>
      <div>Подкаст {podcastId}</div>
    </>
  );
};

interface MyContext extends NextPageContext {}
Podcast.getInitialProps = async (ctx: MyContext) => {
  const { podcastId } = ctx.query;
  return { podcastId: Array.isArray(podcastId) ? podcastId[0] : podcastId };
};

export default Podcast;
