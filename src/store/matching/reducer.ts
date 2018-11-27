
import { ActionType, getType } from "typesafe-actions";
import * as channels from "./actions";
import { Reducer } from "redux";
import { Channel, Socket } from "phoenix";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
export type channelAction = ActionType<typeof channels>;

export interface MatchingState {
	channel?: Channel;
	socket?: Socket;
	matches?: FortnitePlayerStats[];
}

const reducer: Reducer<MatchingState> =
	(state: MatchingState = { channel: undefined }, action: channelAction) => {
		switch (action.type) {
			case getType(channels.socketConnect.success):
				return { ...state, socket: action.payload.socket, channel: action.payload.channel };
			case getType(channels.initialMatch):
				console.log(action.payload);
				state.matches = action.payload;
				return { ...state, matches: action.payload };
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
				return { ...state, channel: undefined };
			case getType(channels.newMatch):
				if (state.matches !== undefined) {
					state.matches.push(action.payload);
				}
				return { ...state, matches: state.matches };
			default:
				return state;
		}
	};

export default reducer;
