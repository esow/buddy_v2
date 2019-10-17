import { ActionType, getType } from "typesafe-actions";
import * as users from "./actions";
import { Reducer } from "redux";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
export type UserAction = ActionType<typeof users>;

export type UserState = {
	stats?: FortnitePlayerStats;
	error: string | null;
	isFetching: boolean;
};

const initialState = {
	stats: undefined,
	error: null,
	isFetching: false
};

const reducer: Reducer<UserState> = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case getType(users.fetchUser.request):
			return { ...state, isFetching: true };
		case getType(users.fetchUser.success):
			return { ...state, isFetching: false, stats: action.payload };
		case getType(users.fetchUser.failure):
			return { ...state, isFetching: false, error: "No user found!" };
		case getType(users.editUserInput):
			if (state.stats != null) {
				state.stats.comment = action.payload.comment;
				state.stats.languages = action.payload.languages;
				state.stats.ageGroup = action.payload.ageGroup;
				state.stats.voiceChat = action.payload.voiceChat;
				var criteria = { ageGroups: { interval1: true, interval2: true, interval3: true }, ignoreLanguage: false, voiceChat: { YES: true, NO: true } }
				state.stats.criteria = criteria
				state.stats.gameInfo = { platform: "pc", gamesPlayed: 1, gameCriteria: { minGamesPlayed: 1 } }
				state.stats.game = "fortnite"
				return { ...state, stats: state.stats };
			}
			return state;
		default:
			return state;
	}
};
export default reducer;
