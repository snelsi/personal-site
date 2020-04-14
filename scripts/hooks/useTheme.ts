import { createLocalStorageStateHook } from "use-local-storage-state";

export const useThemeStore = createLocalStorageStateHook<"light" | "dark">(
  "preffered-theme",
  "light",
);

interface useThemeProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;
}
export function useTheme(): useThemeProps {
  if (typeof window === "undefined") {
    return {
      theme: "light",
      setTheme: () => {
        throw new Error("Setting a theme is not supported inside server-side rendered apps");
      },
      toggleTheme: () => {
        throw new Error("Toggle theme is not supported inside server-side rendered apps");
      },
    };
  }

  const [theme, setTheme] = useThemeStore();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, setTheme, toggleTheme };
}
