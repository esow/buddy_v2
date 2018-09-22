import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import serverStatsReducer from "./ServerStats/reducer";
import { StateType } from "typesafe-actions";

const rootReducer = combineReducers({
	router: routerReducer,
	auth: authReducer,
	serverStats: serverStatsReducer,
	user: userReducer
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;
