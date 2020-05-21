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
}));
