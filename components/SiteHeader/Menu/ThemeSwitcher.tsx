import * as React from "react";
import styled from "styled-components";

import Switch from "@material-ui/core/Switch";

import { useTheme } from "scripts";

interface ThemeSwitcherProps {}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <span>Night mode</span> <Switch checked={theme === "dark"} onClick={toggleTheme} />
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid var(--color-borderline);
  padding: 0.5em;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
