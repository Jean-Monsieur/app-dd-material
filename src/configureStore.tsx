import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import * as localforage from "localforage";
import logger from "redux-logger";
import { PersistConfig, persistReducer } from "redux-persist";
import rootReducer from "./app/store/index";

const persistConfig: PersistConfig<any> = {
	key: "root",
	version: 1,
	storage: localforage,
	blacklist: [],
};

const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default () => {
	const store = configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(logger),
		devTools: process.env.NODE_ENV !== "production",
	});

	return { store };
};

export { history };
