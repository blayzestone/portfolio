import React from "react";
import Section from "../components/Section";
import { useAboutStyles } from "../hooks/styles/useAboutStyles";
import { colorMode } from "../utils/colorMode";
import { links } from "../constants";

const About = ({ darkMode }) => {
  const classes = useAboutStyles();
  const theme = colorMode(darkMode);

  return (
    <Section id={links.about}>
      <div className={classes.container}>
        <h2 className={classes.title}>About</h2>
        <p className={classes.test}>
          I'm a recent grad from Lambda School, an intensive full-time bootcamp that teaches HTML5, CSS3, Javascript, React, Redux, NodeJS, and Computer Science fundamentals. I've also done some volunteer work and freelance work.
        </p>
      </div>
    </Section>
  );
};

export default About;
