import * as React from "react";
import SummonerSearch from "../../components/SummonerSearch/SummonerSearch";
import "./StartPage.css";

export interface StartPageProps {
}

export default class StartPage extends React.Component<StartPageProps, any> {
	render() {
		return (
			<div className="start-page">
				<div className="page-content">
					<p><span>Buddy.GG</span> - League of Legends</p>
					<div className="welcome-text">
						<p>Find people to play with, easily.</p>
						<p>People who <span>speak your language</span>.</p>
					</div>
					<SummonerSearch />
				</div>
			</div>
		);
	}
}
