import * as React from "react";
import "./UserPane.css";

export interface UserPaneProps {
	gamesPlayed?: number;
	gamesWon?: number;
}

export default class UserPane extends React.Component<UserPaneProps, any> {
	static defaultProps: Partial<UserPaneProps> = {
		gamesPlayed: 100,
		gamesWon: 25
	};

	render() {
		// const { gamesPlayed, gamesWon } = this.props;
		return (
			<div className="summoner-pane">
				test
			</div>
		);
	}
}
