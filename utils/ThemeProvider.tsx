import * as React from "react";

import { useTheme } from "scripts";

const ThemeContext = React.createContext("light");

export const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    }

    return () => {
      document.documentElement.dataset.theme = undefined;
    };
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
