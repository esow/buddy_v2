
import { ActionType, getType } from "typesafe-actions";
import * as stats from "./actions";
import { Reducer } from "redux";
export type StatsAction = ActionType<typeof stats>;

export interface ServerStatsState {
	playersOnline?: number;
	fortnitePlayerOnline?: number;
}

const reducer: Reducer<ServerStatsState> =
	(state: ServerStatsState = { playersOnline: undefined }, action: StatsAction) => {
		switch (action.type) {
			case getType(stats.fetchStats.success):
				// var actualAction = (action as StatsReceivedAction);
				// var response = actualAction.payload.playersOnline;
				// Calculate the total number of online players
				// var totalPlayers = Object.keys(response).reduce((p, c) => (p + response[c]), 0);
				var totalPlayers = 40;

				return { ...state, playersOnline: totalPlayers, fortnitePlayerOnline: 20 };
			default:
				return state;
		}
	};

export default reducer;