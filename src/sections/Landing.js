import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <p className={classes.subtitle}>Front End Engineer.</p>
        <div>
          <a href="https://github.com/blayzestone" className={classes.social}>
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/blayze-stone/"
            className={classes.social}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
