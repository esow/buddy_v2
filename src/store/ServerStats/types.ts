import { Action } from "redux";

export const STATS_RECEIVED = "STATS_RECEIVED";

export interface StatsReceivedAction extends Action {
	type: "STATS_RECEIVED";
	payload: {
		playersOnline: { [key: string]: number }
	};
}

export interface ServerStatsState {
	playersOnline?: number;
}

export type ServerStatsActions = StatsReceivedAction;