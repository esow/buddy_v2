
import { ActionType, getType } from "typesafe-actions";
import * as stats from "./actions";
import { Reducer } from "redux";
export type StatsAction = ActionType<typeof stats>;

export interface ServerStatsState {
	lolPlayersOnline?: number;
	fortnitePlayersOnline?: number;
}

const reducer: Reducer<ServerStatsState> =
	(state: ServerStatsState = { lolPlayersOnline: undefined, fortnitePlayersOnline: undefined }, action: StatsAction) => {
		switch (action.type) {
			case getType(stats.fetchStats.success):
				var response = action.payload.players_online;
				var lol = response.fortnite;
				var fortnite = response.fortnite;
				var lolPlayers = Object.keys(lol).reduce((sum, k) => (sum + lol[k]), 0);
				var fortnitePlayers = Object.keys(fortnite).reduce((sum, k) => (sum + fortnite[k]), 0);

				return { ...state, lolPlayersOnline: lolPlayers, fortnitePlayerOnline: fortnitePlayers };
			default:
				return state;
		}
	};

export default reducer;
