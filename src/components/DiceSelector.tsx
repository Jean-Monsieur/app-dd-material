import React, { FunctionComponent, useState } from "react";

import {
	mdiDiceD20,
	mdiDiceD12,
	mdiDiceD10,
	mdiDiceD8,
	mdiDiceD6,
	mdiDiceD4,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
	createStyles,
	FormControl,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	Theme,
} from "@material-ui/core";

import { Dice } from "../app/typings/dice";
type DiceSelectorProps = {};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 10,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
);

const DiceSelector: FunctionComponent<DiceSelectorProps> = () => {
	const classes = useStyles();

	const [selectedDice, setSelectedDice] = useState<Dice>(Dice.D20);

	return (
		<>
			<FormControl variant="filled" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">
					Dé
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={selectedDice}
					onChange={(e) =>
						setSelectedDice(Dice[e.target.value as Dice])
					}
					label="Dé"
					autoWidth
				>
					<MenuItem value={Dice.D20}>
						<Icon
							path={mdiDiceD20}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
					<MenuItem value={Dice.D12}>
						<Icon
							path={mdiDiceD12}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
					<MenuItem value={Dice.D10}>
						<Icon
							path={mdiDiceD10}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
					<MenuItem value={Dice.D8}>
						<Icon
							path={mdiDiceD8}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
					<MenuItem value={Dice.D6}>
						<Icon
							path={mdiDiceD6}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
					<MenuItem value={Dice.D4}>
						<Icon
							path={mdiDiceD4}
							size={1.5}
							horizontal
							vertical
							rotate={180}
						/>
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default DiceSelector;
