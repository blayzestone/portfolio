import React from "react";
import { useStyles } from "../hooks/styles/useStyles";
import { colorMode } from "../utils/colorMode";
import Particles from "react-particles-js";

const Landing = ({ darkMode }) => {
  const classes = useStyles();
  const { textColor } = colorMode(darkMode);

  return (
    <>
      <div className={classes.section}>
        <Particles
          className={classes.particles}
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
        <div className={classes.titlesContainer}>
          <h1 className={classes.title}>Blayze Stone</h1>
          <p className={classes.subtitle}>Full Stack software developer.</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
