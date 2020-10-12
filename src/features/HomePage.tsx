import {
	Button,
	Card,
	createStyles,
	FormControl,
	Grid,
	Input,
	InputAdornment,
	InputLabel,
	Menu,
	MenuItem,
	Paper,
	TextField,
	Theme,
	Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { HomeBox } from "../components";
import DialpadIcon from "@material-ui/icons/Dialpad";

export function HomePage() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Generator
			</Typography>
			<Paper className={classes.paper}>
				<div className={classes.centerContainer}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								className={classes.margin}
								id="input-with-icon-textfield"
								variant="filled"
								label="Nom"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4} sm={6}>
							<TextField
								fullWidth
								className={classes.margin}
								id="input-with-icon-textfield"
								label="Nombre apparraissant"
								variant="filled"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4} sm={6}>
							<TextField
								fullWidth
								className={classes.margin}
								id="input-with-icon-textfield"
								label="Nombre apparraissant"
								variant="filled"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} md={4} sm={6}>
							<FormControl className={classes.margin} fullWidth>
								<InputLabel htmlFor="input-with-icon-adornment">
									Nombre de DV
								</InputLabel>
								<Input
									type="number"
									id="input-with-icon-adornment"
									startAdornment={
										<InputAdornment position="start">
											<DialpadIcon />
										</InputAdornment>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={4} sm={6}>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									Profile
								</MenuItem>
								<MenuItem onClick={handleClose}>
									My account
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Logout
								</MenuItem>
							</Menu>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Button
								fullWidth
								aria-controls="simple-menu"
								variant="contained"
								aria-haspopup="true"
								color="secondary"
								onClick={handleClick}
							>
								Open Menu
							</Button>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: "100%",
			textAlign: "center",
			paddingTop: 20,
			paddingLeft: 15,
			paddingRight: 15,
			flexGrow: 1,
		},
		centerContainer: {
			flex: 1,
			height: "90%",
			display: "flex",
			// alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		margin: {
			margin: theme.spacing(1),
		},
		button: {
			marginTop: 20,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},

		withoutLabel: {
			marginTop: theme.spacing(3),
		},
		textField: {
			width: "25ch",
		},
	})
);
