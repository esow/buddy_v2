import * as React from "react";
import StartPage from "./pages/startpage/StartPage";
import { Route } from "react-router-dom";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<Route path="/" component={StartPage} />
			</div>
		);
	}
}
