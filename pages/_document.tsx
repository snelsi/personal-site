import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru">
        <Head>
          <meta name="theme-color" content="var(--color-background, white)" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const styledComponentSheet = new StyledComponentSheets();
  const materialUiSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheet.seal();
  }
};
