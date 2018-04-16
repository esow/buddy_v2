import { Reducer } from "redux";
import { UserState, UserActions, LOAD_USER_SUCCESS, LOAD_USER_FAILED, LOAD_USER_REQUEST } from "./types";

export const initialState: UserState = {
	user: null,
	error: null,
	isFetching: false
};

export const userReducer: Reducer<UserState> = (state: UserState = initialState, action) => {
	switch ((action as UserActions).type) {
		case LOAD_USER_REQUEST:
			return { ...state, isFetching: true };
		case LOAD_USER_SUCCESS:
			return { ...state, isFetching: false, user: action.payload.user };
		case LOAD_USER_FAILED:
			return { ...state, isFethcing: false, error: "No user found!" };

		default:
			return state;
	}
};
