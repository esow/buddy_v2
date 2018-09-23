import * as React from "react";
import { storiesOf } from "@storybook/react";
import UserPane from "../src/blocks/UserPane/UserPane";

storiesOf("User Pane", module)
	.add("Data", () => (
		<UserPane
			platform={"pc"}
			username={"hansp"}
			stats={{
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
			}}
		/>)
	);