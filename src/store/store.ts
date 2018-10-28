import { routerMiddleware } from "react-router-redux";
import { History } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";

const composeEnhancers = composeWithDevTools({});

function configureStore(initialState?: object, history?: History) {
	// configure middlewares
	const middlewares = [routerMiddleware(history!), thunk];
	// compose enhancers
	const enhancer = composeEnhancers(applyMiddleware(...middlewares));
	// create store
	return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

export default store;