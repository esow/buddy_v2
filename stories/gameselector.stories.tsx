import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { storiesOf } from "@storybook/react";
import GameSelector from "../src/components/GameSelector/GameSelector";

const listOfGames = [
	{ imageSrc: "/GameSelectorFortnite-640x360.png", title: "Fortnite - Battle Royale", playerCount: 4274 },
	{ imageSrc: "/GameSelectorLeagueOfLegends-640x360.png", title: "League of Legends", playerCount: 1 }];

storiesOf("GameSelector", module)
	.add("with image", () => <GameSelector listOfGames={listOfGames} />);