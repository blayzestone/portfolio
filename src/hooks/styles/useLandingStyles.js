import { createUseStyles } from "react-jss";

export const useLandingStyles = createUseStyles((theme) => ({
  titlesContainer: {
    position: "relative",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    width: "max-content",
    fontSize: "2.5rem",
    padding: "1rem",
    borderBottom: "solid 1px",
  },
  subtitle: {
    margin: "0 0 1rem",
    textAlign: "center",
    fontSize: "1.5rem",
  },

  social: {
    fontSize: "2.5rem",
    margin: "1rem",
    color: theme.textColor,
    border: "none",
  },
}));
