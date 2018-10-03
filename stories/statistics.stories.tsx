import * as React from "react";
import { storiesOf } from "@storybook/react";
import FortniteStatistics from "../src/components/Statistics/FortniteStatistics";
import LeagueStatistics from "../src/components/Statistics/LeagueStatistics";

storiesOf("Statistics", module)
	.add("FortniteStatistics with example data", () => (
		<FortniteStatistics wins={13} played={156} kdratio={2.53} top5={24} top12={42} />)
	)
	
	.add("LeagueStatistics with example data", () => (
		<LeagueStatistics 
			iconSrc="/icon.png"
			league="Platinum"
			division="III"
			mostPlayed1Src="/Leona.png"
			mostPlayed2Src="/Nautilus.png"
			mostPlayed3Src="/Thresh.png"
			positionsSrc="/top.png"
		/>)
	);