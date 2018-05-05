import { createAction } from "typesafe-actions";
import { AuthSessionDTO } from "../model/auth";
import { FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILED } from "./types";

export const loadAuthSuccess = createAction(FETCH_AUTH_SUCCESS, (authResponse: AuthSessionDTO) => ({
	type: FETCH_AUTH_SUCCESS,
	payload: { authResponse: authResponse },
}));

export const loadAuthFailed = createAction(FETCH_AUTH_FAILED);
