import React from "react";
import ExpenseTracker from "./components/ExpenseTracker";

import Navigation from "./components/Navigation";
import GlobalContextProvider from "./context/GlobalContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <GlobalContextProvider>
          <Navigation />
          <ExpenseTracker />
        </GlobalContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
