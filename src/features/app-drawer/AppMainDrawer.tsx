import {
	Drawer as DrawerMui,
	Theme,
	Hidden,
	makeStyles,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

import AppDrawer from ".";

type AppMainDrawerProps = {
	isOpened: boolean;
	onOpenChanged: () => void;
};

const AppMainDrawer: FunctionComponent<AppMainDrawerProps> = ({
	isOpened,
	onOpenChanged,
}) => {
	const classes = useStyles();

	return (
		<>
			<Hidden mdUp>
				<DrawerMui
					variant="persistent"
					anchor={"left"}
					open={isOpened}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={onOpenChanged}
					ModalProps={{
						keepMounted: true,
					}}
				>
					<AppDrawer />
				</DrawerMui>
			</Hidden>
			<Hidden smDown>
				<DrawerMui
					variant="persistent"
					open={isOpened}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<AppDrawer />
				</DrawerMui>
			</Hidden>
		</>
	);
};

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
		// backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		// backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

export default AppMainDrawer;
