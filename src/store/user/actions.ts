import BuddyApi from "../../api/BuddyApi";
import { createAsyncAction, createAction } from "typesafe-actions";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";

export const fetchUser = createAsyncAction("FETCH_USER_REQUEST", "FETCH_USER_SUCCESS", "FETCH_USER_ERROR")
	<void, FortnitePlayerStats, Error>();

export const editUserInput = createAction("EDIT_USER_INPUT", resolve => {
	return (data: {
		voiceChat: boolean;
		ageGroup: string;
		comment: string;
		languages: string[];
	}) => resolve(data);
});

export function loadUser(platform: string, username: string) {
	return function (dispatch: any) {
		dispatch(fetchUser.request());
		return BuddyApi.getUser(platform, username)
			.then(user => {
				console.log(user)
				user.data.name = user.data.username;
				dispatch(fetchUser.success(user.data));

			}).catch(_ => {
				dispatch(fetchUser.failure(new Error()));
			});
	};
}