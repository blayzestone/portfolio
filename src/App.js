import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";
import Navigation from "./components/Navigation";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Landing from "./sections/Landing";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={() => colorMode(darkMode)}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Landing darkMode={darkMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
