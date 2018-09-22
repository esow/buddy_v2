import * as React from "react";
import { storiesOf } from "@storybook/react";
import UserPane from "../src/blocks/UserPane/UserPane";

storiesOf("User Pane", module)
	.add("Data", () => (
		<UserPane
			platform={"pc"}
			username={"esow"}
			top5finishes={10}
			top3finishes={6}
			top1finishes={3}
		/>)
	);