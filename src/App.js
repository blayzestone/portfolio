import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";
import ToggleDarkMode from "./components/ToggleDarkMode";

function App() {
  const [darkMode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={() => colorMode(darkMode)}>
      <div className="App">
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkmode} />
        <div
          style={{
            fontSize: "3rem",
            color: darkMode ? "white" : "black",
            backgroundColor: darkMode ? "black" : "white",
          }}
        >
          Hello World
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
