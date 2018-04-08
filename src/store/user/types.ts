import { Action } from "redux";
import { User } from "../../utils/mocks";

export interface UserState {
	user: User | null;
}

export interface UserReceivedAction extends Action {
	type: "USER_RECEIVED";
	payload: {
		user: User
	};
}

export type UserActions = UserReceivedAction;