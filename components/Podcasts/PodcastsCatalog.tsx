import * as React from "react";

import { Card, Gallery } from "components";
import { podcasts } from "components/Podcasts";

interface PodcastsCatalogProps {}

export const PodcastsCatalog: React.FC<PodcastsCatalogProps> = () => (
  <Gallery anchor="articles" title="Послушать" url="Podcasts" inner>
    {podcasts.map(props => (
      <Card key={props.url} tag="Podcast" {...props} />
    ))}
  </Gallery>
);
