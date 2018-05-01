import { ActionCreator } from "redux";
import {
	FetchAuthSuccessAction,
	FETCH_AUTH_SUCCESS,
	FETCH_AUTH_FAILED,
	FetchAuthFailedAction,
	AuthResponse
} from "./types";
import BuddyApi from "../../api/BuddyApi";

export const loadAuthSuccess: ActionCreator<FetchAuthSuccessAction> = (authResponse: AuthResponse) => ({
	type: FETCH_AUTH_SUCCESS,
	payload: {
		authResponse: authResponse
	}
});

export const loadAuthFailed: ActionCreator<FetchAuthFailedAction> = () => ({
	type: FETCH_AUTH_FAILED
});

export function loadAuth() {
	return function (dispatch: any) {
		return BuddyApi.getAuthTokens()
			.then(authResponse => {
				dispatch(loadAuthSuccess(authResponse));
			}).catch(_ => {
				dispatch(loadAuthFailed());
			});
	};
}