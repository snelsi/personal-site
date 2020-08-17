import * as React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import Head from "next/head";

import "css/normalize.css";
import "css/styles.css";
import "css/typography.css";
import "css/colors.css";

import "themes/light_theme.css";
import "react-awesome-slider/dist/styles.css";

import { useCheerExplorers } from "scripts/hooks/сheerExplorers";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useCheerExplorers();

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
