import * as React from "react";
import { storiesOf } from "@storybook/react";
import MatchRequestModal from "../src/components/Modals/MatchRequestModal";
import MatchResponseModal from "../src/components/Modals/MatchResponseModal";
import RequestingMatchModal from "../src/components/Modals/RequestingMatchModal";


const player = {
	username: "Trolleren",
	total: {
		gamesWon: 0,
		gamesPlayed: 22
	},
	squad: {
		top6finishes: 3,
		top3finishes: 1,
		killDeathRatio: 0.6111111111111112,
		gamesWon: 0,
		gamesPlayed: 18
	},
	solo: {
		top25finishes: 0,
		top10finishes: 0,
		killDeathRatio: 0.375,
		gamesWon: 0,
		gamesPlayed: 8
	},
	platform: "pc",
	duo: {
		top5finishes: 1,
		top12finishes: 2,
		killDeathRatio: 0.7142857142857143,
		gamesWon: 7,
		gamesPlayed: 14
	},
	comment: "LF decent sniper to carry my sorry ass. No chix plz.",
	name: "Trolleren",
	languages: [
		"za",
		"dk",
	],
	ageGroup: "interval2",
	voiceChat: [
		false
	],
	id: "20423d24-6351-4bb3-abbe-5e4f0fab05b3",
	game: "fortnite",
	criteria: {
		ageGroups: {
			age: "22+",
			interval1: true,
			interval2: false,
			interval3: false
		},
		voiceChat: {
			voice: "Yes",
			YES: true,
			NO: false
		},
		ignoreLanguage: false
	},
	gameInfo: {
		platform: "pc",
		gamesPlayed: 1,
		gameCriteria: {
			minGamesPlayed: 1
		}
	}
};


storiesOf("Modals", module)
	.add("MatchRequestModal with example data", () => (
		<MatchRequestModal player={player} open={true} timeLeft={200} handleClose={() => { }} handleAccept={() => { }} />)
	)

	.add("MatchResponseModal with rejected example data", () => (
		<MatchResponseModal
			open={true}
			handleClose={() => { }}
			response={"Request_Rejected"}
			player={player}
		/>)
	)

	.add("MatchResponseModal with cancelled example data", () => (
		<MatchResponseModal
			open={true}
			handleClose={() => { }}
			response={"Request_Cancelled"}
			player={player}
		/>)
	)

	.add("MatchResponseModal with accepted example data", () => (
		<MatchResponseModal
			open={true}
			handleClose={() => { }}
			response={"Request_Accepted"}
			player={player}
		/>)
	)

	.add("RequestingMatchModal with example data", () => (
		<RequestingMatchModal
			open={true}
			handleClose={() => { }}
			timeLeft={200}
			player={player}
		/>)
	)