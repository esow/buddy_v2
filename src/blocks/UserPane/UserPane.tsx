import * as React from "react";
import "./UserPane.css";
import FortniteStatistics from "../../components/Statistics/FortniteStatistics";

export interface UserPaneProps {
	platform: string;
	username: string;
	stats: {
		totalGamesWon: number;
		totalGamesPlayed: number;
		soloGamesWon: number;
		soloGamesPlayed: number;
		soloKillDeathRatio: number;
		soloTop10Finishes: number;
		soloTop25Finishes: number;
		duoGamesWon: number;
		duoGamesPlayed: number;
		duoKillDeathRatio: number;
		duoTop5Finishes: number;
		duoTop12Finishes: number;
		squadGamesWon: number;
		squadGamesPlayed: number;
		squadKillDeathRatio: number;
		squadTop3Finishes: number;
		squadTop6Finishes: number;
	};
}

export default class UserPane extends React.Component<UserPaneProps, any> {
	static defaultProps: Partial<UserPaneProps> = {
		stats: {
			totalGamesWon: 0,
			totalGamesPlayed: 0,
			soloGamesWon: 0,
			soloGamesPlayed: 0,
			soloKillDeathRatio: 0,
			soloTop10Finishes: 0,
			soloTop25Finishes: 0,
			duoGamesWon: 0,
			duoGamesPlayed: 0,
			duoKillDeathRatio: 0,
			duoTop5Finishes: 0,
			duoTop12Finishes: 0,
			squadGamesWon: 0,
			squadGamesPlayed: 0,
			squadKillDeathRatio: 0,
			squadTop3Finishes: 0,
			squadTop6Finishes: 0,
		}
	};

	render() {
		const user = this.props;
		return (
			<div className="summoner-pane">
				<div className="column user-input">
					<div className="header">{user.username}</div>
				</div>
				<div className="column statistics">
					<div className="header">Duo stats</div>
					<FortniteStatistics
						wins={user.stats.duoGamesWon}
						played={user.stats.duoGamesPlayed}
						kdratio={user.stats.duoKillDeathRatio}
						top5={user.stats.duoTop5Finishes}
						top12={user.stats.duoTop12Finishes}
					/>
				</div>
			</div>
		);
	}
}
