import BuddyApi from "../../api/BuddyApi";
import { loadAuthSuccess, loadAuthFailed } from "./actions";
import { Dispatch } from "redux";

export function loadAuth() {
	return function (dispatch: Dispatch<any>) {
		return BuddyApi.getAuthTokens()
			.then(authResponse => {
				dispatch(loadAuthSuccess(authResponse));
			}).catch(_ => {
				dispatch(loadAuthFailed());
			});
	};
}