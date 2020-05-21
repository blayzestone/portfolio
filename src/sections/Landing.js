import React from "react";
import { useStyles } from "../hooks/styles/useStyles";

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.titlesContainer}>
        <h1 className={classes.title}>Blayze Stone</h1>
        <p className={classes.subtitle}>Full Stack software developer.</p>
      </div>
    </div>
  );
};

export default Landing;
