import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Checkbox } from "semantic-ui-react";

function Navigation() {
  const [mode, setMode] = useState("");
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    return isLightTheme ? setMode("Light") : setMode("Dark");
  }, [isLightTheme]);

  return (
    <nav className="nav">
      <h1>Expense Tracker</h1>
      <div className="nav-mode">
        <h1>{mode}</h1>
        <Checkbox toggle onClick={toggleTheme} className="toggle-btn" />
      </div>
    </nav>
  );
}

export default Navigation;
