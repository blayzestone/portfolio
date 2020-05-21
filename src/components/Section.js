import React from "react";
import { useStyles } from "../hooks/styles/useStyles";

const Section = (props) => {
  const classes = useStyles();
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
