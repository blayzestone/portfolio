import React, { useState } from "react";
import Particles from "react-particles-js";
import { ThemeProvider } from "react-jss";
import { colorMode } from "./utils/colorMode";
import Navigation from "./components/Navigation";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [section, setSection] = useState(0);
  const { textColor } = colorMode(darkMode);
  const sections = [
    <Landing darkMode={darkMode} />,
    <About darkMode={darkMode} />,
    <Skills darkMode={darkMode} />,
    <Projects darkMode={darkMode} />
  ];
  const particles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "1"
  }

  return (
    <>
      <ThemeProvider theme={() => colorMode(darkMode)}>
        <Particles
          style={particles}
          params={{
            particles: {
              color: {
                value: textColor,
              },
              lineLinked: {
                color: {
                  value: textColor,
                },
              },
            },
          }}
        />
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} setSection={setSection}/>
        {sections[section]}
      </ThemeProvider>
    </>
  );
}

export default App;
