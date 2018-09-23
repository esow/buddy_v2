import { Socket } from "phoenix";
import { AuthSessionDTO } from "../store/auth/types";

export function configureChannel(session: AuthSessionDTO) {
	let socket = new Socket("wss://lolbuddy.herokuapp.com/socket", {
		logger: (kind: string, msg: string, data: any) => { console.log(`${kind}: ${msg}`, data); },
		params: {
			session_token: session.session_token,
			session_id: session.session_id
		}
	});

	socket.onError = (reason) => {
		console.log(reason);
	};
	console.log("asd");
	socket.connect();

	return socket;
}