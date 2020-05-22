import React from "react";
import Particles from "react-particles-js";
import { useLandingStyles } from "../hooks/styles/useLandingStyles";
import { colorMode } from "../utils/colorMode";
import { links } from "../constants";
import Section from "../components/Section";

const Landing = ({ darkMode }) => {
  const classes = useLandingStyles();
  const { textColor } = colorMode(darkMode);

  return (
    <Section id={links.home}>
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
    </Section>
  );
};

export default Landing;
