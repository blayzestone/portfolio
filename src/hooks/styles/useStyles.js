import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  section: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.primaryColor,
    position: "relative",
  },

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
    color: theme.textColor,
    fontSize: "2.5rem",
    padding: "1rem",
    borderBottom: "solid 1px",
  },
  subtitle: {
    margin: 0,
    color: theme.textColor,
    textAlign: "center",
    fontSize: "1.5rem",
  },
}));
