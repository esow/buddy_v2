import { ActionCreator } from "redux";
import {
	LoadUserSuccessAction,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAILED,
	LoadUserFailedAction,
	LOAD_USER_REQUEST,
	LoadUserRequestAction
} from "./types";
import { User } from "../../utils/mocks";
import BuddyApi from "../../api/BuddyApi";

export const loadUserSuccess: ActionCreator<LoadUserSuccessAction> = (user: User) => ({
	type: LOAD_USER_SUCCESS,
	payload: {
		user: user
	}
});

export const loadUserRequest: ActionCreator<LoadUserRequestAction> = () => ({
	type: LOAD_USER_REQUEST
});

export const loadUserFailed: ActionCreator<LoadUserFailedAction> = () => ({
	type: LOAD_USER_FAILED
});

export function loadUser(platform: string, username: string) {
	return function (dispatch: any) {
		dispatch(loadUserRequest());
		return BuddyApi.getUser(platform, username)
			.then(user => {
				dispatch(loadUserSuccess(user));
			}).catch(_ => {
				dispatch(loadUserFailed());
			});
	};
}