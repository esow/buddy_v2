import * as React from "react";
import "./UserPane.css";

export interface UserPaneProps {
	avatar: string;
	summonerName: string;
	rank: string;
}

export default class UserPane extends React.Component<UserPaneProps, any> {
	static defaultProps: Partial<UserPaneProps> = {
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
