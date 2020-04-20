import * as React from "react";

import { useTheme } from "scripts";

const ThemeContext = React.createContext("light");

export const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.documentElement.dataset.mode = theme;

    return () => {
      document.documentElement.dataset.mode = undefined;
    };
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
