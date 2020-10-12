import React, { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentTheme,
	UITheme,
	toggleTheme,
} from "../../app/store/ui/themeSlice";

type ThemeSelectorProps = {};

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = () => {
	const dispatch = useDispatch();

	const currentTheme = useSelector((state) => getCurrentTheme(state));

	const onToggleThemeClicked = () => {
		dispatch(toggleTheme());
	};

	return (
		<IconButton
			color="secondary"
			aria-label="delete"
			onClick={onToggleThemeClicked}
		>
			{currentTheme === UITheme.DARK ? (
				<Brightness7Icon />
			) : (
				<Brightness3Icon />
			)}
		</IconButton>
	);
};

export default ThemeSelector;
