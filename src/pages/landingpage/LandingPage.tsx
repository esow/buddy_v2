import * as React from "react";
import "./LandingPage.css";
import GameSelector from "../../components/GameSelector/GameSelector";

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
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
					<GameSelector listOfGames={listOfGames} />
				</div>
			</div>
		);
	}
}
