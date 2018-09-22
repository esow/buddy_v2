import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { storiesOf } from "@storybook/react";
import DimmableCard from "../src/components/DimmableCard/DimmableCard";

storiesOf("DimmableCard", module)
	.add("Fortnite as example", () =>
		<DimmableCard
			imageSrc="/GameSelectorFortnite-640x360.png"
			title="Fortnite - Battle Royale"
			playerCount={2}
		/>
	);