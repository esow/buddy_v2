import * as React from "react";
import "./SummonerPane.css";

export interface SummonerPaneProps {
	avatar: string;
	summonerName: string;
	rank: string;
}

export default class SummonerPane extends React.Component<SummonerPaneProps, any> {
	static defaultProps: Partial<SummonerPaneProps> = {
		// tslint:disable-next-line:max-line-length
		avatar: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f6/Jolly_Penguin_profileicon.png/revision/latest?cb=20170505005803",
		summonerName: "Lethly",
		rank: "Silver 3"
	};

	render() {
		const { avatar, summonerName, rank } = this.props;
		return (
			<div className="summoner-pane">
				<img src={avatar} alt="Avatar" />
				<div className="summoner-name">{summonerName}</div>
				<div className="summoner-rank">{rank}</div>
				<button>Find matches!</button>
			</div>
		);
	}
}
