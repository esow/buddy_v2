import * as React from "react";
import { Statistic, Image } from "semantic-ui-react";

interface LeagueStatisticProps {
	iconSrc: string;
	league: string;
	division: string;
	mostPlayed1Src: string;
	mostPlayed2Src: string;
	mostPlayed3Src: string;
	positionSrc: string;
}

const LeagueStatistics: React.SFC<LeagueStatisticProps> = (props) => {

	var badgeSrc: string;

	if (props.league === "Challenger") {
		badgeSrc = "/ChallengerBadge.png";
	} else if (props.league === "Master") {
		badgeSrc = "/MasterBadge.png";
	} else if (props.league === "Diamond") {
		badgeSrc = "/DiamondBadge.png";
	} else if (props.league === "Platinum") {
		badgeSrc = "/PlatinumBadge.png";
	} else if (props.league === "Gold") {
		badgeSrc = "/GoldBadge.png";
	} else if (props.league === "Silver") {
		badgeSrc = "/SilverBadge.png";
	} else if (props.league === "Bronze") {
		badgeSrc = "/BronzeBadge.png";
	} else { badgeSrc = "/BlankBadge.png"; }

	return (

		<Statistic.Group widths="one" >

			<Statistic>
				<Statistic.Label><Image centered circular size="tiny" src={props.iconSrc} /></Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Label>
					<Image centered circular size="tiny" src={badgeSrc} />
					{props.league} {props.division}
				</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Label>
					<Image.Group centered>
						<Image size="mini" src={props.mostPlayed1Src} />
						<Image size="mini" src={props.mostPlayed2Src} />
						<Image size="mini" src={props.mostPlayed3Src} />
					</Image.Group>
					Most played<br />
					champions
				</Statistic.Label>
			</Statistic>

			<Statistic>
				<Statistic.Value><Image centered src={props.positionSrc} /></Statistic.Value>
				<Statistic.Label>
					Most played<br />
					position
				</Statistic.Label>
			</Statistic>

		</Statistic.Group>
	);
};

export default LeagueStatistics;