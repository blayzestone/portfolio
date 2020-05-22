import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  header: {
    position: "fixed",
    zIndex: 1,
    padding: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "@media (min-width: 800px)": {
      width: "50%",
    },

    "@media (min-width: 1200px)": {
      width: "33%",
    },

    "& a": {
      fontSize: "1.2rem",
      color: theme.textColor,
      textDecoration: "none",
    },
  },

  section: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.primaryColor,
    color: theme.textColor,
    position: "relative",
  },
}));
