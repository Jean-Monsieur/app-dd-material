import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentTheme, UITheme } from "./app/store/ui/themeSlice";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#03a9f4",
			light: "#757ce8",
			// main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff",
		},
	},
});
const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		primary: {
			main: "#03a9f4",
			light: "#757ce8",
			// main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff",
		},
	},
});

export function withRoot(Component: any) {
	function WithRoot(props: object) {
		const currentTheme = useSelector((state) => getCurrentTheme(state));
		const [UiState, setUiState] = useState(UITheme.LIGHT);
		useEffect(() => {
			setUiState(currentTheme);
			console.log(currentTheme.theme);
		}, [currentTheme]);

		return (
			<ThemeProvider
				theme={UiState === UITheme.LIGHT ? lightTheme : darkTheme}
			>
				<CssBaseline />
				<Component {...props} />
			</ThemeProvider>
		);
	}

	return WithRoot;
}
