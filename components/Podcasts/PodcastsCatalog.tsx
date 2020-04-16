import * as React from "react";

import { Card, Gallery } from "components";
import { myPodcasts } from "components/Podcasts";

interface PodcastsCatalogProps {}

export const PodcastsCatalog: React.FC<PodcastsCatalogProps> = () => (
  <Gallery anchor="podcasts" title="Послушать" url="podcasts" inner fullScreen>
    {myPodcasts.map((podcast) => (
      <Card {...podcast} key={podcast.id} tag="Podcast" url={`podcasts/${podcast.id}`} />
    ))}
  </Gallery>
);
