import * as React from "react";
import { Statistic, Image } from "semantic-ui-react";

interface LeagueStatisticProps {
	iconSrc: string;
	league: string;
	division: string;
	mostPlayed1Src: string;
	mostPlayed2Src: string;
	mostPlayed3Src: string;
	positionsSrc: string;
}

const LeagueStatistics: React.SFC<LeagueStatisticProps> = (props) => {
	return (
		<Statistic.Group widths="one" >

			<Statistic>
				<Statistic.Label><Image centered circular src={props.iconSrc} /></Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value text>
					{props.division}<br />
					{props.league}
				</Statistic.Value>
				<Statistic.Label>League</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value>
					<Image.Group >
						<Image centered circular src={props.mostPlayed1Src} />
						<Image centered circular src={props.mostPlayed2Src} />
						<Image centered circular src={props.mostPlayed3Src} />
					</Image.Group>
				</Statistic.Value>
				<Statistic.Label>Most played champions</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value><Image centered src={props.positionsSrc} /></Statistic.Value>
				<Statistic.Label>Most played positions</Statistic.Label>
			</Statistic>

		</Statistic.Group>
	);
};

export default LeagueStatistics;