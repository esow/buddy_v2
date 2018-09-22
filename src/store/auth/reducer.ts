import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { $Call } from "utility-types";
import { loadAuthSuccess, loadAuthFailed } from "./actions";
import { AuthSessionDTO } from "../model/auth";

// inferring union type of actions
import * as actions from "./actions";
const returnsOfActions = Object.values(actions);
export type AuthAction = $Call<typeof returnsOfActions[number]>;

export interface AuthState {
	readonly auth?: AuthSessionDTO;
	readonly error?: String;
}

export const initialState: AuthState = {
	auth: undefined,
	error: undefined,
};

export const authReducer: Reducer<AuthState> = (state: AuthState = initialState, action: AuthAction) => {
	switch (action.type) {
		case getType(loadAuthSuccess):
			return { ...state, auth: action.payload.authResponse };
		case getType(loadAuthFailed):
			return { ...state, error: "Could not load auth tokens" };
		default:
			return state;
	}
};
