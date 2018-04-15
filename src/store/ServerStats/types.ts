import { Action } from "redux";

export const STATS_RECEIVED = "STATS_RECEIVED";

export interface StatsReceivedAction extends Action {
	type: "STATS_RECEIVED";
	payload: {
		playersOnline: ServerStatsState
	};
}

export interface ServerStatsState {
	playersOnline: { [key: string]: number } | null;
}

export type ServerStatsActions = StatsReceivedAction;