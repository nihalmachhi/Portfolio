"use client";

import { createContext, useContext } from "react";

type ThemeContextValue = {
  theme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextValue>({ theme: "light" });

export function ThemeProvider({
  theme,
  children,
}: Readonly<{ theme: "light" | "dark"; children: React.ReactNode }>) {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
