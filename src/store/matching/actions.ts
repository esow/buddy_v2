import { configureChannel } from "../../api/Channel";
import { createAsyncAction, createAction } from "typesafe-actions";
import { Channel, Socket } from "phoenix";
import { AuthSessionDTO } from "../auth/types";

export const socketConnect = createAsyncAction("SOCKET_CONNECT", "SOCKET_CONNECT_SUCCESS", "SOCKET_CONNECT_FAILURE")
	<void, { socket: Socket, channel: Channel }, Error>();

export const initialMatch = createAction("INITIAL_MATCHES", resolve => {
	return (initialMatches: any) => resolve(initialMatches);
});

export function connectToSocket(auth: AuthSessionDTO, player: any) {
	return function (dispatch: any) {
		dispatch(socketConnect.request());
		let socket = configureChannel(auth);
		let channel = socket.channel(`players:${auth.session_id}`, {
			payload: player
		});
		channel.join()
			.receive("ok", messages => {
				console.log("catching up", messages);
				dispatch(socketConnect.success({ socket, channel }));
			})
			.receive("error", reason => {
				console.log("failed join", reason);
				dispatch(socketConnect.failure(reason));
			});

		channel.on("initial_matches", (response) => {
			dispatch(initialMatch(response));
		});

		channel.on("new_match", (response) => {
			dispatch(initialMatch(response));
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
