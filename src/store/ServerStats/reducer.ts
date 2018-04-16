import { Reducer } from "redux";
import {
	ServerStatsState, ServerStatsActions, STATS_RECEIVED,
	// StatsReceivedAction 
} from "./types";

export const initialState: ServerStatsState = {
	playersOnline: undefined
};

export const serverStatsReducer: Reducer<ServerStatsState> = (state: ServerStatsState = initialState, action) => {
	switch ((action as ServerStatsActions).type) {
		case STATS_RECEIVED:
			// var actualAction = (action as StatsReceivedAction);
			// var response = actualAction.payload.playersOnline;
			// Calculate the total number of online players
			// var totalPlayers = Object.keys(response).reduce((p, c) => (p + response[c]), 0);
			var totalPlayers = 40;

			return { ...state, playersOnline: totalPlayers };
		default:
			return state;
	}
};
