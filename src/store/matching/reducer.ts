
import { ActionType, getType } from "typesafe-actions";
import * as channels from "./actions";
import { Reducer } from "redux";
import { Channel, Socket } from "phoenix";
import { FortnitePlayerStats, AgeGroups } from "../../models/FornitePlayerStats";
export type channelAction = ActionType<typeof channels>;

export interface MatchingState {
	channel?: Channel;
	socket?: Socket;
	matches: FortnitePlayerStats[];
	matchPlayer?: FortnitePlayerStats;
	matchResponse?: String
	local: boolean
	is_busy?: string,
}

export interface back_user {
	voice: boolean,
	name: String,
	languages: string[],
	id: string,
	game_info: {
		total: {
			gamesWon: number,
			gamesPlayed: number
		};
		solo: {
			top25finishes: number,
			top10finishes: number,
			killDeathRatio: number,
			gamesWon: number,
			gamesPlayed: number
		};
		duo: {
			top12finishes: number,
			top5finishes: number,
			killDeathRatio: number,
			gamesWon: number,
			gamesPlayed: number
		};
		squad: {
			top6finishes: number,
			top3finishes: number,
			killDeathRatio: number,
			gamesWon: number,
			gamesPlayed: number
		}
		platform: string,
		games_played: number,
		game_criteria: {
			min_games_played: number
		}
	},
	game: string,
	criteria: {
		voice: boolean[],
		ignore_language: boolean,
		age_groups: AgeGroups
	},
	comment: string,
	age_group: string
}


const reducer: Reducer<MatchingState> =
	(state: MatchingState = { channel: undefined, local: false, matches: [] }, action: channelAction) => {
		switch (action.type) {
			case getType(channels.socketConnect.success):
				return { ...state, socket: action.payload.socket, channel: action.payload.channel };
			case getType(channels.initialMatch):
				var matches = action.payload.map(elem => (parse_response(elem)));
				return { ...state, matches: matches };
			case getType(channels.leaveChannelAction):
				return { ...state, channel: undefined };
			case getType(channels.removeMatch):
				if (state.matches !== undefined) {
					const id = action.payload.id;
					const index = state.matches.findIndex(d => d.id === id);
					if (index > -1) {
						state.matches.splice(index, 1);
					}
				}
				return { ...state, matches: state.matches };
			case getType(channels.newMatch):
				if (state.matches !== undefined) {
					state.matches.push(parse_response(action.payload));
				}
				return { ...state, matches: state.matches };
			case getType(channels.newMatchRequest):
				if (state.matchPlayer != undefined) {
					return { ...state, is_busy: action.payload.id }
				}
				return { ...state, local: false, matchPlayer: action.payload }
			case getType(channels.matchResponse):
				return { ...state, matchResponse: action.payload }
			case getType(channels.localRequestedMatch):
				return { ...state, local: true, matchPlayer: action.payload }
			case getType(channels.resetMatch):
				return { ...state, matchPlayer: undefined, matchResponse: undefined }
			case getType(channels.playerIsBusy):
				return { ...state, matchPlayer: action.payload }
			default:

				return state;
		}
	};

function parse_response(back_player: back_user) {
	var user: FortnitePlayerStats = {
		name: back_player.name,
		total: back_player.game_info.total,
		squad: back_player.game_info.squad,
		solo: back_player.game_info.solo,
		duo: back_player.game_info.duo,
		comment: back_player.comment,
		languages: back_player.languages,
		ageGroup: back_player.age_group,
		voiceChat: back_player.voice,
		id: back_player.id,
		game: back_player.game,
		criteria: {
			ageGroups: back_player.criteria.age_groups,
			voiceChat: {
				YES: back_player.criteria.voice[0],
				NO: back_player.criteria.voice[1]
			},
			ignoreLanguage: back_player.criteria.ignore_language
		},
		gameInfo: {
			platform: back_player.game_info.platform,
			gamesPlayed: back_player.game_info.games_played,
			gameCriteria: {
				minGamesPlayed: back_player.game_info.game_criteria.min_games_played
			}
		}
	}
	return user
}
export default reducer;
