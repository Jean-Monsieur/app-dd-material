import { combineReducers } from "redux";

import themeReducer from "./themeSlice";

const uiReducer = combineReducers({
	theme: themeReducer,
});
export default uiReducer;
export type uiState = ReturnType<typeof uiReducer>;
