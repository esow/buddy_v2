import * as React from "react";
import "./LandingPage.css";
import GameSelector from "../../components/GameSelector/GameSelector";
import Footer from "../../blocks/Footer/Footer";
import { Image } from "semantic-ui-react";

export interface LandingPageProps {
}

export default class LandingPage extends React.Component<LandingPageProps, any> {

	render() {
		const listOfGames = [
			{ imageSrc: "/GameSelectorFortnite-640x360.png", title: "Fortnite - Battle Royale", playerCount: 4274 },
			{ imageSrc: "/GameSelectorLeagueOfLegends-640x360.png", title: "League of Legends", playerCount: 1 }];
		return (
			<div className="landing-page">
				<div className="page-content">
					<Image centered style={{ width: 297, height: 246 }} src="/BUDDYGG-LOGO-3.png" />
					<GameSelector listOfGames={listOfGames} />
				</div>
				<Footer />
			</div>
		);
	}
}
