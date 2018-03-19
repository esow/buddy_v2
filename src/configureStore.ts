import { createStore, applyMiddleware, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";
import { ApplicationState, reducers } from "./store";

function configureStore(
	history?: History,
	initialState?: ApplicationState
): Store<ApplicationState> {
	const composeEnhancers = composeWithDevTools({});
	return createStore<ApplicationState>(
		reducers,
		initialState!,
		composeEnhancers(applyMiddleware(
			routerMiddleware(history!),
		)),
	);
}

const store = configureStore();
export default store;