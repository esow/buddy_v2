import { ActionType, getType } from "typesafe-actions";
import * as users from "./actions";
import { User } from "../../utils/mocks";
import { Reducer } from "redux";
export type UserAction = ActionType<typeof users>;

export type UserState = {
	user: User | null;
	error: string | null;
	isFetching: boolean;
};

const initialState = {
	user: null,
	error: null,
	isFetching: false
};

const reducer: Reducer<UserState> = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case getType(users.fetchUser.request):
			return { ...state, isFetching: true };
		case getType(users.fetchUser.success):
			return { ...state, isFetching: false, user: action.payload };
		case getType(users.fetchUser.failure):
			return { ...state, isFetching: false, error: "No user found!" };

		default:
			return state;
	}
};
export default reducer;
