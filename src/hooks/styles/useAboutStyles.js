import { createUseStyles } from "react-jss";

export const useAboutStyles = createUseStyles((theme) => ({
	container: {
		position: "relative",
		alignSelf: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		fontSize: "1.2rem",
		zIndex: 1,
		borderLeft: "solid 1px",
		margin: "1rem",
		padding: "1rem",

		  "@media (min-width: 500px)": {
			width: "90%",
		  },

		  "@media (min-width: 1200px)": {
			width: "50%",
		  },
	},
	title: {
		fontSize: "2rem",
		margin: 0,
	}

}));
