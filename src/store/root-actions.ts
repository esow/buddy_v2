import { RouterAction, LocationChangeAction } from "react-router-redux";

import { AuthAction } from "./auth/reducer";

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | AuthAction;
