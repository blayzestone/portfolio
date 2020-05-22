import React, { useEffect, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useStyles } from "../hooks/styles/useStyles";
import { links } from "../constants";

const Navigation = ({ darkMode, setDarkMode }) => {
  const [targetLink, setTargetLink] = useState(null);
  const { header, navigation } = useStyles();

  useEffect(() => {
    const element = document.getElementById(targetLink);
    targetLink && element.scrollIntoView({ behavior: "smooth" });
  }, [targetLink]);

  const scrollToTarget = (evt, link) => {
    evt.preventDefault();
    setTargetLink(link);
  };

  return (
    <header className={header}>
      <div className={navigation}>
        {Object.values(links).map((link) => (
          <a href={`#${link}`} onClick={(evt) => scrollToTarget(evt, link)}>
            {link}
          </a>
        ))}
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
};

export default Navigation;
