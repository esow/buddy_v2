import * as React from "react";
import "./UserPane.css";
import BarChart from "../../components/BarChart/BarChart";

export interface UserPaneProps {
	platform: string;
	username: string;
	top5finishes: number;
	top3finishes: number;
	top1finishes: number;
	gamesPlayed?: number;
	gamesWon?: number;
}

export default class UserPane extends React.Component<UserPaneProps, any> {
	static defaultProps: Partial<UserPaneProps> = {
		gamesPlayed: 100,
		gamesWon: 25
	};

	render() {
		const { username, top5finishes, top3finishes, top1finishes, gamesPlayed, gamesWon } = this.props;
		return (
			<div className="summoner-pane">
				<div className="column user-input">
					<div className="header">{username}</div>
				</div>
				<div className="column statistics">
					<div className="header">Statistics</div>
					<div className="circles">
						<div className="circle played">
							<div className="text">played</div>
							{gamesPlayed}
						</div>
						<div className="circle won">
							<div className="text">won</div>
							{gamesWon}
						</div>
					</div>
					<BarChart top5={top5finishes} top3={top3finishes} top1={top1finishes} />
				</div>
			</div>
		);
	}
}
