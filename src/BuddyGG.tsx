import * as React from "react";
import StartPage from "./pages/startpage/StartPage";
import { Route } from "react-router-dom";
import UserPane from "./blocks/UserPane/UserPane";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<Route path="/" component={StartPage} />
				<Route path="/summoner/:id" component={UserPane} />
			</div>
		);
	}
}
