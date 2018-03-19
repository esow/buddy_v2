import { UserState } from "./user/types";
import { combineReducers, Reducer } from "redux";
import { userReducer } from "./user/reducer";
import { Dispatch } from "react-redux";

export interface ApplicationState {
	user: UserState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	user: userReducer
});

export interface ConnectedReduxProps<S> {
	dispatch: Dispatch<S>;
}