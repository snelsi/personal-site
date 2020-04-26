import { createLocalStorageStateHook } from "use-local-storage-state";

type ITheme = "light" | "dark" | "system" | undefined;

export const useThemeStore = createLocalStorageStateHook<ITheme>("preffered-theme", "system");

interface useThemeProps {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
  toggleTheme: () => void;
}
export function useTheme(): useThemeProps {
  if (typeof window === "undefined") {
    return {
      theme: "system",
      setTheme: () => {
        throw new Error("Setting a theme is not supported inside server-side rendered apps");
      },
      toggleTheme: () => {
        throw new Error("Toggle theme is not supported inside server-side rendered apps");
      },
    };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useThemeStore();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, setTheme, toggleTheme };
}
