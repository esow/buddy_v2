import { Reducer } from "redux";
import { AuthState, AuthActions, FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILED } from "./types";

// TODO change to immutable.js to get even more type safety
export const initialState: AuthState = {
	auth: undefined,
	error: undefined,
};

export const authReducer: Reducer<AuthState> = (state: AuthState = initialState, action: AuthActions) => {
	switch (action.type) {
		case FETCH_AUTH_SUCCESS:
			return { ...state, auth: action.payload.authResponse };
		case FETCH_AUTH_FAILED:
			return { ...state, error: "Could not load auth tokens" };

		default:
			return state;
	}
};
