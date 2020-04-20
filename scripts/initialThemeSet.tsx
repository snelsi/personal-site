const codeToRunOnClient = `
(function() {
  let theme = JSON.parse(localStorage.getItem("preffered-theme"));

  if (theme) {
    document.documentElement.dataset.mode = theme;
  }
})()
  `;

export const InitialThemeSet = () => (
  <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
);
