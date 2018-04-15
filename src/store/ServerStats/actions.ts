import BuddyApi from "../../api/BuddyApi";
import * as types from "./types";

export function loadStats() {
	return function (dispatch: any) {
		return BuddyApi.getStats().then(stats => {
			dispatch(loadStatsSuccess(stats));
		}).catch(error => {
			throw (error);
		});
	};
}

export function loadStatsSuccess(stats: any) {
	return { type: types.STATS_RECEIVED, payload: stats };
}