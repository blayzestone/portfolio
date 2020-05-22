import React from "react";
import { useStyles } from "../hooks/styles/useStyles";

const Section = (props) => {
  const classes = useStyles();
  return (
    <section id={props.id} className={classes.section}>
      {props.children}
    </section>
  );
};

export default Section;
