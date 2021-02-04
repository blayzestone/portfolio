import { createUseStyles } from "react-jss";

export const useProjectsStyles = createUseStyles((theme) => ({
	container: {
		alignSelf: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "1rem",
    marginTop: "1rem",
	},

  card: {
    width: "100%",
    position: "relative",
    zIndex: 1,
    borderLeft: "solid 1px",
    margin: "2rem 0",
    padding: "1rem",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "@media (min-width: 1200px)": {
      width: "30vw",
    },

    "& a": {
      color: theme.textColor,
      marginRight: "1rem",
    },
  },

  title: {
		fontSize: "1.5rem",
		margin: 0,
	},
}));
