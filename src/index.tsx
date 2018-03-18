import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import BuddyGG from "./BuddyGG";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<BuddyGG />
	</Router>,
	document.getElementById("root") as HTMLElement
);