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
          Hey there, my name is Blayze Stone. I'm a freelance Front End
          Engineer. I'm also a Lambda School grad. Lambda School is an intensive
          full-time bootcamp that teaches Javascript, React, Redux, HTML5, CSS3,
          NodeJS, Postgresql, Python, and Computer Science fundamentals.
        </p>
        <p>
          When I'm not coding you can find me working out at the gym or reading
          philosophy.
        </p>
      </div>
    </Section>
  );
};

export default About;
