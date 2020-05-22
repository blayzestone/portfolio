import { createUseStyles } from "react-jss";

export const useProjectsStyles = createUseStyles((theme) => ({
  card: {
    width: "60%",
    height: "max-content",
    padding: "2rem 1rem",
    borderRadius: "1rem",
    backgroundColor: theme.secondaryColor,
    textAlign: "center",

    "& a": {
      fontSize: "1.2rem",
      color: theme.textColor,
      margin: "0 1rem",
    },
  },
  title: {
    margin: {
      bottom: "2rem",
    },
    fontSize: "2rem",
  },
  desc: {
    fontSize: "1.2rem",
    textAlign: "left",
  },
}));
