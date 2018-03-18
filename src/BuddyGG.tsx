import * as React from "react";
import StartPage from "./pages/startpage/StartPage";
import { Route } from "react-router-dom";
import SummonerPane from "./blocks/SummonerPane/SummonerPane";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<Route path="/" component={StartPage} />
				<Route path="/summoner/:id" component={SummonerPane} />
			</div>
		);
	}
}
