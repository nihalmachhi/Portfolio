"use client";

import { createContext, useContext } from "react";

type ThemeContextValue = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  onToggleTheme: () => {},
});

export function ThemeProvider({
  theme,
  onToggleTheme,
  children,
}: Readonly<{
  theme: "light" | "dark";
  onToggleTheme: () => void;
  children: React.ReactNode;
}>) {
  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
