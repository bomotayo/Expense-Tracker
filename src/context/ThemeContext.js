import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  //Toggle function that switches the isLightTheme boolean value
  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
