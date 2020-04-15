import React from "react";

import "tippy.js/dist/tippy.css";

import "styles.css";
import "colors.css";

import "themes/light_theme.css";
import "themes/dark_theme.css";

import { ThemeProvider } from "utils/ThemeProvider";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
