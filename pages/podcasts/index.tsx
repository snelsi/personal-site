import * as React from "react";
import { NextPage } from "next";

import Link from "next/link";
import { PodcastsCatalog } from "components";

const Podcasts: NextPage = () => {
  React.useEffect(() => {
    document.title = "Podcasts";
  }, []);

  return (
    <>
      <Link href="/">
        <a href="/">Назад</a>
      </Link>
      <div>Мои Подкасты</div>
      <PodcastsCatalog />
    </>
  );
};

export default Podcasts;
