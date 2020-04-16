import * as React from "react";
import Head from "next/head";

interface MainPreviewProps {}

export const MainPreview: React.FC<MainPreviewProps> = () => (
  <Head key="tags">
    {/* Primary Meta Tags */}
    <title>Roman Zhuravlov - Web Developer</title>
    <meta name="title" content="Roman Zhuravlov - Web Developer" />
    <meta name="description" content="Personal site, blog and portfolio of Roman Zhuravlov." />

    {/* Open Graph / Facebook  */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://snelsi.now.sh/" />
    <meta property="og:title" content="Roman Zhuravlov - Web Developer" />
    <meta
      property="og:description"
      content="Personal site, blog and portfolio of Roman Zhuravlov."
    />
    <meta
      property="og:image"
      content="https://snelsi.now.sh/images/MainPreview.jpg"
    />

    {/* Twitter  */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://snelsi.now.sh/" />
    <meta property="twitter:title" content="Roman Zhuravlov - Web Developer" />
    <meta
      property="twitter:description"
      content="Personal site, blog and portfolio of Roman Zhuravlov."
    />
    <meta
      property="twitter:image"
      content="https://snelsi.now.sh/images/MainPreview.jpg"
    />
  </Head>
);
