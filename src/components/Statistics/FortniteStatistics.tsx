import * as React from "react";
import { Icon, Statistic } from "semantic-ui-react";

interface FortniteStatisticProps {
	winRatio: Number;
	played: Number;
	kdRatio: Number;
	top5: Number;
	top12: Number;
}

const FortniteStatistics: React.SFC<FortniteStatisticProps> = (props) => {
	return (
		<Statistic.Group widths="one" size={"tiny"}>
			<Statistic>
				<Statistic.Value>{(props.winRatio).toPrecision(2)}%</Statistic.Value>
				<Statistic.Label><Icon name="winner" color="yellow" />Win Ratio</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>{props.top5}</Statistic.Value>
				<Statistic.Label><Icon name="angle double up" color="green" />Top5</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>{props.top12}</Statistic.Value>
				<Statistic.Label><Icon name="angle up" color="green" />Top12</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>{props.played}</Statistic.Value>
				<Statistic.Label><Icon name="game" color="violet" />Played</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>{(props.kdRatio).toPrecision(2)}</Statistic.Value>
				<Statistic.Label><Icon name="bullseye" color="red" />K/D-Ratio</Statistic.Label>
			</Statistic>
		</Statistic.Group>
	);
};

export default FortniteStatistics;
