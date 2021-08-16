import {
	createStyles,
	FormControl,
	Grid,
	Input,
	InputAdornment,
	InputLabel,
	Paper,
	TextField,
	Theme,
	Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import DialpadIcon from "@material-ui/icons/Dialpad";

import CategoryIcon from "@material-ui/icons/Category";

import DiceSelector from "../components/DiceSelector";
export function HomePage() {
	const classes = useStyles();

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
											<CategoryIcon />
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
							<DiceSelector />
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
