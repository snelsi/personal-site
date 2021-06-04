import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <meta name="theme-color" content="var(--color-background, white)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
