import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";

function App() {
  const [darkMode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={() => colorMode(darkMode)}>
      <div
        style={{
          fontSize: "3rem",
          color: darkMode ? "white" : "black",
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        Hello World
      </div>
    </ThemeProvider>
  );
}

export default App;
