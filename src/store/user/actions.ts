import { ActionCreator } from "redux";
import { UserReceivedAction } from "./types";
import { User } from "../../utils/mocks";

export const userReceived: ActionCreator<UserReceivedAction> = (user: User) => ({
	type: "USER_RECEIVED",
	payload: {
		user: user
	}
});