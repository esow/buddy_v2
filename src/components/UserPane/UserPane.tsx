import * as React from "react";
import "./UserPane.css";

export interface UserPaneProps {
	avatar?: string;
	username: string;
	platform: string;
	gamesPlayed: number;
	gamesWon: number;
}

export default class UserPane extends React.Component<UserPaneProps, any> {
	static defaultProps: Partial<UserPaneProps> = {
		// tslint:disable-next-line:max-line-length
		avatar: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f6/Jolly_Penguin_profileicon.png/revision/latest?cb=20170505005803",
		username: "Lethly",
		platform: "Silver 3"
	};

	render() {
		const { avatar, username, platform, gamesPlayed, gamesWon } = this.props;
		return (
			<div className="summoner-pane">
				<img src={avatar} alt="Avatar" />
				<div className="summoner-name">{username}</div>
				<div className="summoner-rank">{platform}</div>
				<p>Games played: {gamesPlayed}</p>
				<p>Games won: {gamesWon}</p>
				<button>Find matches!</button>
			</div>
		);
	}
}
