import { createAsyncAction } from "typesafe-actions";
import { AuthSessionDTO } from "./types";
import BuddyApi from "../../api/BuddyApi";
import { Dispatch } from "redux";

export const fetchAuth = createAsyncAction("FETCH_AUTH_REQUEST", "FETCH_AUTH_SUCCESS", "FETCH_AUTH_ERROR")
	<void, AuthSessionDTO, Error>();

export function loadAuth() {
	return function (dispatch: Dispatch<any>) {
		return BuddyApi.getAuthTokens()
			.then(authResponse => {
				dispatch(fetchAuth.success(authResponse));
			}).catch(_ => {
				dispatch(fetchAuth.failure(new Error));
			});
	};
}
