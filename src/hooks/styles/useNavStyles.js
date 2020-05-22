import { createUseStyles } from "react-jss";

export const useNavStyles = createUseStyles((theme) => ({
  darkModePill: {
    width: "2.4rem",
    height: "1.2rem",
    border: `solid 1px ${theme.textColor}`,
    borderRadius: "1rem",
    backgroundColor: theme.primaryColor,
    cursor: "pointer",
    "& div": {
      width: "50%",
      height: "100%",
      position: "relative",
      left: (props) => (props.darkMode ? "50%" : "0"),
      backgroundColor: theme.textColor,
      borderRadius: "1rem",
    },
  },
}));
