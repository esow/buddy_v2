import { Reducer } from "redux";
import { ServerStatsState, ServerStatsActions, STATS_RECEIVED } from "./types";

export const initialState: ServerStatsState = {
	playersOnline: null
};

export const serverStatsReducer: Reducer<ServerStatsState> = (state: ServerStatsState = initialState, action) => {
	switch ((action as ServerStatsActions).type) {
		case STATS_RECEIVED:

			var response = action.payload["players_online"];
			// Calculate the total number of online players
			var totalPlayers = Object.keys(response).reduce((p, c) => (p + response[c]), 0);
			response.total = totalPlayers;

			return { ...state, playersOnline: response };
		default:
			return state;
	}
};
