import React from "react";
import Terser from "terser";

const codeToRunOnClient = `
(function() {
  try {
    const theme = JSON.parse(localStorage.getItem("preffered-theme"));

    if (theme) {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    localStorage.removeItem('preffered-theme');
  }
})()
`;

export const InitialThemeSet = () => {
  const calledFunction = Terser.minify(codeToRunOnClient).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};
