import { Action } from "redux";
import { User } from "../../utils/mocks";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILED = "LOAD_USER_FAILED";

export interface UserState {
	user: User | null;
	error: string | null;
	isFetching: boolean;
}

export interface LoadUserSuccessAction extends Action {
	type: "LOAD_USER_SUCCESS";
	payload: {
		user: User
	};
}

export interface LoadUserRequestAction extends Action {
	type: "LOAD_USER_REQUEST";
}

export interface LoadUserFailedAction extends Action {
	type: "LOAD_USER_FAILED";
}

export type UserActions = LoadUserSuccessAction & LoadUserFailedAction & LoadUserRequestAction;