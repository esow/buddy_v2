import * as React from "react";
import LandingPage from "./pages/landingpage/LandingPage";
import { Route } from "react-router-dom";
import "./BuddyGG.css";
import Footer from "./blocks/Footer/Footer";
import FortnitePage from "./pages/fortnitepage/FortnitePage";
import ComingSoon from "./pages/coming_soon/ComingSoon";
import ConnectedMatchingPage from "./pages/matchingpage/ConnectedMatchingPage";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<Route exact path="/" component={ComingSoon} />
				<Route exact path="/demo" component={LandingPage} />
				<Route path="/fortnitebr" component={FortnitePage} />
				<Route path="/leagueoflegends" component={LandingPage} />
				<Route path="/matching/*" component={ConnectedMatchingPage} />
				<Footer />
			</div>
		);
	}
}
