import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Landing from "./sections/Landing";

function App() {
  const [darkMode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={() => colorMode(darkMode)}>
      <>
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkmode} />
        <Landing />
      </>
    </ThemeProvider>
  );
}

export default App;
