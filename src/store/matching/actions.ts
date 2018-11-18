import { configureChannel } from "../../api/Channel";
import { createAsyncAction, createAction } from "typesafe-actions";
import { Channel, Socket } from "phoenix";
import { AuthSessionDTO } from "../auth/types";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
import history from "../../utils/history";

export const socketConnect = createAsyncAction("SOCKET_CONNECT", "SOCKET_CONNECT_SUCCESS", "SOCKET_CONNECT_FAILURE")
	<void, { socket: Socket, channel: Channel }, Error>();

export const initialMatch = createAction("INITIAL_MATCHES", resolve => {
	return (initialMatches: FortnitePlayerStats[]) => resolve(initialMatches);
});

export const newMatch = createAction("NEW_MATCH", resolve => {
	return (match: FortnitePlayerStats) => resolve(match);
});

export const leaveChannelAction = createAction("LEAVE_CHANNEL", resolve => {
	return () => resolve();
});

export function leaveChannel(channel: any) {
	return function (dispatch: any) {
		channel.leave().receive("ok", () => {
			dispatch(leaveChannelAction());
			console.log("left!");
		});
	};
}

export function connectToSocket(auth: AuthSessionDTO, player: FortnitePlayerStats, socketDefault?: Socket) {
	return function (dispatch: any) {
		dispatch(socketConnect.request());
		let socket = socketDefault === undefined ? configureChannel(auth) : socketDefault;

		player.id = auth.session_id;
		player.game = "fortnite";
		player.criteria = {
			"ageGroups": {
				"interval1": true,
				"interval2": true,
				"interval3": true
			},
			"voiceChat": {
				"YES": true,
				"NO": true
			},
			"ignoreLanguage": false
		};
		player.gameInfo = {
			"platform": "pc",
			"gamesPlayed": 1,
			"gameCriteria": {
				"minGamesPlayed": 1
			}
		};

		console.log(player);

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

		channel.on("initial_matches", (response: { players: FortnitePlayerStats[] }) => {
			dispatch(initialMatch(response.players));
		});

		channel.on("new_match", (response) => {
			dispatch(newMatch(response));
		});

		channel.on("remove_player", (response) => {
			dispatch(initialMatch(response));
		});

		channel.on("match_requested", (response) => {
			dispatch(initialMatch(response));
		});

		channel.on("request_response", (response) => {
			dispatch(initialMatch(response));
		});

	};
}
