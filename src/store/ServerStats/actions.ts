import BuddyApi from "../../api/BuddyApi";
import { createAsyncAction } from "typesafe-actions";

export const fetchStats = createAsyncAction("FETCH_STATS_REQUEST", "FETCH_STATS_SUCCESS", "FETCH_STATS_ERROR")
	<void, { [key: string]: { [key: string]: number } }, Error>();

export function loadStats() {
	return function (dispatch: any) {
		return BuddyApi.getStats().then(stats => {
			dispatch(fetchStats.success(stats));
		}).catch(error => {
			// TODO add error handling
			dispatch(fetchStats.failure(new Error(error)));
		});
	};
}
