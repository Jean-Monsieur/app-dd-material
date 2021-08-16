import { Theme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Router } from "react-router-dom";
import { history } from "../configureStore";

import { withRoot } from "../withRoot";
import AppMainBar from "../features/app-bar";
import MainContentRouter from "./router/MainContentRouter";
import AppMainDrawer from "../features/app-drawer/AppMainDrawer";
import { useMediaQuery } from "@material-ui/core";

function App() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	return (
		<div className={classes.root}>
			<div className={classes.appFrame}>
				<Router history={history}>
					<AppMainBar
						isOpen={mobileOpen}
						onOpenChanged={handleDrawerToggle}
						isMobile={isMobile}
					/>
					<AppMainDrawer
						isOpened={mobileOpen}
						onOpenChanged={handleDrawerToggle}
					/>
					<MainContentRouter />
				</Router>
			</div>
		</div>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerHeader: { ...theme.mixins.toolbar },
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

export default withRoot(App);
