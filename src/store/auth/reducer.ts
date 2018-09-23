import { ActionType, getType } from "typesafe-actions";
import * as auths from "./actions";
import { AuthSessionDTO } from "./types";
import { Reducer } from "redux";
export type AuthAction = ActionType<typeof auths>;

export interface AuthState {
	readonly auth?: AuthSessionDTO;
	readonly error?: String;
}

const reducer: Reducer<AuthState> = ((state: AuthState = { auth: undefined, error: undefined }, action: AuthAction) => {
	switch (action.type) {
		case getType(auths.fetchAuth.success):
			return { ...state, auth: action.payload };
		case getType(auths.fetchAuth.failure):
			return { ...state, error: "Could not load auth tokens" };
		default:
			return state;
	}
});

export default reducer;
