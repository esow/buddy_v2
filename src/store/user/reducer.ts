import { Reducer } from "redux";
import { UserState, UserActions } from "./types";

export const initialState: UserState = {
	user: null
};

export const userReducer: Reducer<UserState> = (state: UserState = initialState, action) => {
	switch ((action as UserActions).type) {
		case "USER_RECEIVED":
			return { ...state, user: action.user };
		default:
			return state;
	}
};
