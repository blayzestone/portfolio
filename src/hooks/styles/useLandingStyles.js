import { createUseStyles } from "react-jss";

export const useLandingStyles = createUseStyles((theme) => ({
  particles: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  titlesContainer: {
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
    margin: 0,
    textAlign: "center",
    fontSize: "1.5rem",
  },
}));
