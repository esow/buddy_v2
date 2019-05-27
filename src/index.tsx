import * as React from "react";
import * as ReactDOM from "react-dom";
import BuddyGG from "./BuddyGG";
import { Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import history from "./utils/history";
import "semantic-ui-less/semantic.less";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<BuddyGG />
		</Router>
	</Provider>,
	document.getElementById("root") as HTMLElement
);
