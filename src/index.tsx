import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import BuddyGG from "./BuddyGG";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./configureStore";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<BuddyGG />
		</Router>
	</Provider>,
	document.getElementById("root") as HTMLElement
);