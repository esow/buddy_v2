import { Action } from "redux";

export interface UserState {
	user: User | null;
}

export interface User {
	name: string;
	rank: string;
	avatar: string;
}

export interface UserReceivedAction extends Action {
	type: "USER_RECEIVED";
	payload: {
		user: User
	};
}

export type UserActions = UserReceivedAction;