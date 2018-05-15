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
		const { platform, username, top5finishes, top3finishes, top1finishes } = this.props;
		return (
			<div className="summoner-pane">
				{`platform: ${platform} username: ${username}`}
				<BarChart top5={top5finishes} top3={top3finishes} top1={top1finishes} />
			</div>
		);
	}
}
