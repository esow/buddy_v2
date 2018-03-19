import { ActionCreator } from "redux";
import { UserReceivedAction, User } from "./types";

export const userReceived: ActionCreator<UserReceivedAction> = (user: User) => ({
	type: "USER_RECEIVED",
	payload: {
		user: user
	}
});