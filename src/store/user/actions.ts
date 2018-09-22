import { User } from "../../utils/mocks";
import BuddyApi from "../../api/BuddyApi";
import { createAsyncAction } from "typesafe-actions";

export const fetchUser = createAsyncAction("FETCH_USER_REQUEST", "FETCH_USER_SUCCESS", "FETCH_USER_ERROR")
	<void, User, Error>();

export function loadUser(platform: string, username: string) {
	return function (dispatch: any) {
		dispatch(fetchUser.request());
		return BuddyApi.getUser(platform, username)
			.then(user => {
				dispatch(fetchUser.success(user.data));
			}).catch(_ => {
				dispatch(fetchUser.failure(new Error()));
			});
	};
}