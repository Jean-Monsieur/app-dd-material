import React, { FunctionComponent } from "react";
import {
	AppBar,
	Button,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from "@material-ui/core";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import MenuIcon from "@material-ui/icons/Menu";

import ThemeSelector from "../../components/theme-selector/ThemeSelector";

type AppMainBarProps = {
	isMobile: boolean;
	isOpen: boolean;
	onOpenChanged: () => void;
};

const AppMainBar: FunctionComponent<AppMainBarProps> = ({
	isMobile,
	onOpenChanged,
}) => {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					onClick={onOpenChanged}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>

				<Typography
					variant="h6"
					className={classes.title}
					color="textPrimary"
					noWrap={isMobile}
				>
					TEST MATERIAL JM
				</Typography>
				<Button color="inherit">Login</Button>
				<ThemeSelector />
			</Toolbar>
		</AppBar>
	);
};

const useStyles = makeStyles((theme: Theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	title: {
		flexGrow: 1,
	},
}));

export default AppMainBar;
