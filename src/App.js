import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";
import Navigation from "./components/Navigation";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={() => colorMode(darkMode)}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Landing darkMode={darkMode} />
        <Projects />
      </ThemeProvider>
    </>
  );
}

export default App;
