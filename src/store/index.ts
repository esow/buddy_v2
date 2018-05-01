import { UserState } from "./user/types";
import { combineReducers, Reducer } from "redux";
import { userReducer } from "./user/reducer";
import { Dispatch } from "react-redux";
import { ServerStatsState } from "./ServerStats/types";
import { serverStatsReducer } from "./ServerStats/reducer";
import { authReducer } from "./auth/reducer";
import { AuthState } from "./auth/types";

export interface ApplicationState {
	user: UserState;
	serverStats: ServerStatsState;
	authState: AuthState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	user: userReducer,
	serverStats: serverStatsReducer,
	authState: authReducer
});

export interface ConnectedReduxProps<S> {
	dispatch: Dispatch<S>;
}