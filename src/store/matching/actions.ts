import { configureChannel } from "../../api/Channel";
import { createAsyncAction, createAction } from "typesafe-actions";
import { Channel, Socket } from "phoenix";
import { AuthSessionDTO } from "../auth/types";
import { FortnitePlayerStats, Criteria } from "../../models/FornitePlayerStats";
import history from "../../utils/history";
import { back_user } from './reducer';

export const socketConnect = createAsyncAction("SOCKET_CONNECT", "SOCKET_CONNECT_SUCCESS", "SOCKET_CONNECT_FAILURE")
	<void, { socket: Socket, channel: Channel }, Error>();

export const initialMatch = createAction("INITIAL_MATCHES", resolve => {
	return (initialMatches: back_user[]) => resolve(initialMatches);
});

export const newMatch = createAction("NEW_MATCH", resolve => {
	return (match: back_user) => resolve(match);
});

export const newMatchRequest = createAction("NEW_MATCH_REQUEST", resolve => {
	return (match: FortnitePlayerStats) => resolve(match);
});

export const playerIsBusy = createAction("PLAYER_IS_BUSY", resolve => {
	return (prevPlayer: FortnitePlayerStats) => resolve(prevPlayer);
});

export const matchResponse = createAction("MATCH_RESPONSE", resolve => {
	return (response: string) => resolve(response);
});

export const resetMatch = createAction("MATCH_RESET", resolve => {
	return () => resolve();
});

export const localRequestedMatch = createAction("REQUEST_MATCH", resolve => {
	return (match: FortnitePlayerStats) => resolve(match);
});

export const leaveChannelAction = createAction("LEAVE_CHANNEL", resolve => {
	return () => resolve();
});

export const removeMatch = createAction("REMOVE_MATCH", resolve => {
	return (match: back_user) => resolve(match);
});

export function requestMatch(channel: any, player: FortnitePlayerStats) {
	return function (dispatch: any) {
		channel.push("request_match", { "player": player })
		dispatch(localRequestedMatch(player))
	}
}

export function answerMatchRequest(channel: any, id: string, answer: string) {
	return function (dispatch: any) {
		channel.push("respond_to_request", { "id": id, response: answer });
		if (answer !== "Requested_Player_Busy") {
			dispatch(matchResponse(answer))
		} 
		if (answer !== "Request_Cancelled") {
			
		}
	};
}

export function resetMatchRequest() {
	return function (dispatch: any) {
		dispatch(resetMatchRequest())
	};
};

export function leaveChannel(channel: any) {
	return function (dispatch: any) {
		channel.leave().receive("ok", () => {
			dispatch(leaveChannelAction());
		});
	};
}

export function updateCriteria(channel: any, criteria: Criteria) {
	channel.push('update_criteria', criteria)
}

export function connectToSocket(auth: AuthSessionDTO, player: FortnitePlayerStats, socketDefault?: Socket) {
	return function (dispatch: any) {
		dispatch(socketConnect.request());
		let socket = socketDefault === undefined ? configureChannel(auth) : socketDefault;

		let channel = socket.channel(`players:${auth.session_id}`, {
			payload: player
		});
		channel.join()
			.receive("ok", messages => {
				console.log("catching up", messages);
				dispatch(socketConnect.success({ socket, channel }));
				history.push("/matching/fortnite");
			})
			.receive("error", reason => {
				console.log("failed join", reason);
				dispatch(socketConnect.failure(reason));
			});

		channel.on("initial_matches", (response: { players: back_user[] }) => {
			dispatch(initialMatch(response.players));
		});

		channel.on("new_match", (player: back_user) => {
			dispatch(newMatch(player));
		});

		channel.on("remove_player", (response) => {
			dispatch(removeMatch(response));
		});

		channel.on("match_requested", (player: FortnitePlayerStats) => {
			dispatch(newMatchRequest(player));
		});

		channel.on("request_response", (response) => {
			dispatch(matchResponse(response.response));
		});

	};
}
