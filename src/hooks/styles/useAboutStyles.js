import { createUseStyles } from "react-jss";

export const useAboutStyles = createUseStyles((theme) => ({
	container: {
		width: "50%",
		position: "relative",
		alignSelf: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		fontSize: "1.5rem",
		zIndex: 1,
		borderLeft: "solid 1px",
		padding: "0.5rem 1rem",
	},
	title: {
		fontSize: "2.5rem",
		margin: 0,
	}

}));
