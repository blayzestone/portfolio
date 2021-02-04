import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useStyles } from "../hooks/styles/useStyles";
import { links } from "../constants";

const Navigation = ({ darkMode, setDarkMode, setSection }) => {
  const { header, navigation } = useStyles();

  return (
    <header className={header}>
      <div className={navigation}>
        {Object.values(links).map((link, i) => (
          <a href={`#${link}`} onClick={() => setSection(i)}>
            {link}
          </a>
        ))}
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
};

export default Navigation;
