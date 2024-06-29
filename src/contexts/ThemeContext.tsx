import { createContext } from "react";
import { theme } from "src/theme";

const ThemeContext = createContext<Theme | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
