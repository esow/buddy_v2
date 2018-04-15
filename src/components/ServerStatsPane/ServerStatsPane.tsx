import * as React from "react";
import { Statistic } from "semantic-ui-react";

export interface ServerStatsPaneProps {
	playersOnline: number;
}

export default class ServerStatsPane extends React.Component<ServerStatsPaneProps, any> {
	static defaultProps: Partial<ServerStatsPaneProps> = {
	};

	render() {
		const { playersOnline } = this.props;
		return (
			<div className="stats-pane">
				<Statistic inverted color="brown" label="Online players" value={playersOnline} />
			</div>
		);
	}
}
