import { combineReducers } from "redux";

import { History } from "history";
import uiReducer from "./ui";

const rootReducer = (history: History) =>
	combineReducers({
		ui: uiReducer,
	});

export default rootReducer;
export type AppMainState = ReturnType<typeof rootReducer>;
