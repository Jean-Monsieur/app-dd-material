import { createSlice } from "@reduxjs/toolkit";

export enum UITheme {
	LIGHT = "LIGHT",
	DARK = "DARK",
}

type SliceState = {
	theme: UITheme;
};

const initialState: SliceState = {
	theme: UITheme.LIGHT,
};

const themeSlice = createSlice({
	name: "theme",
	initialState: initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme =
				state.theme === UITheme.LIGHT
					? (state.theme = UITheme.DARK)
					: (state.theme = UITheme.LIGHT);
		},
	},
});

export const getCurrentTheme = (state: any) => state.ui.theme.theme;
const { actions } = themeSlice;

export const toggleTheme = actions.toggleTheme;
export default themeSlice.reducer;
