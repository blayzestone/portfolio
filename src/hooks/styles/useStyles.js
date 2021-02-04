import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  header: {
    position: "fixed",
    zIndex: 100,
    padding: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.primaryColor,
  },

  navigation: {
    opacity: 1,
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
      color: theme.textColor,
    },
  },

  section: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.primaryColor,
    color: theme.textColor,
    position: "relative",
  },
}));
