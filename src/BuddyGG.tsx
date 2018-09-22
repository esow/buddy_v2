import * as React from "react";
import LandingPage from "./pages/landingpage/LandingPage";
import { Route } from "react-router-dom";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<Route path="/" component={LandingPage} />
			</div>
		);
	}
}
