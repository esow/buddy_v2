import { UserState } from "./user/types";
import { combineReducers, Reducer } from "redux";
import { userReducer } from "./user/reducer";
import { Dispatch } from "react-redux";
import { ServerStatsState } from "./ServerStats/types";
import { serverStatsReducer } from "./ServerStats/reducer";

export interface ApplicationState {
	user: UserState;
	serverStats: ServerStatsState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	user: userReducer,
	serverStats: serverStatsReducer
});

export interface ConnectedReduxProps<S> {
	dispatch: Dispatch<S>;
}