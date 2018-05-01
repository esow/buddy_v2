import { Action } from "redux";
import * as types from "./types";

export type FETCH_AUTH_SUCCESS = "LOAD_AUTH_SUCCESS";
export const FETCH_AUTH_SUCCESS: FETCH_AUTH_SUCCESS = "LOAD_AUTH_SUCCESS";
export type FETCH_AUTH_FAILED = "LOAD_AUTH_FAILED";
export const FETCH_AUTH_FAILED: FETCH_AUTH_FAILED = "LOAD_AUTH_FAILED";

export interface AuthState {
	auth?: AuthResponse;
	error?: String;
}

export interface AuthResponse {
	session_token: String;
	session_id: String;
}

export interface FetchAuthSuccessAction extends Action {
	type: FETCH_AUTH_SUCCESS;
	payload: {
		authResponse: types.AuthResponse
	};
}

export interface FetchAuthFailedAction extends Action {
	type: FETCH_AUTH_FAILED;
}

export type AuthActions = FetchAuthSuccessAction | FetchAuthFailedAction;