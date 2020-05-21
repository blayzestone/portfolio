import React from "react";
import { useNavStyles } from "../hooks/styles/useNavStyles";

const ToggleDarkMode = ({ darkMode, setDarkMode }) => {
  const classes = useNavStyles({ darkMode });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div onClick={toggleDarkMode} className={classes.darkModePill}>
      <div></div>
    </div>
  );
};

export default ToggleDarkMode;
