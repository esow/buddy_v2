import * as React from "react";
import { storiesOf } from "@storybook/react";
import Statistics from "../src/components/Statistics/Statistics";

storiesOf("Statistics", module)
	.add("Statistics with zero data", () => (
		<Statistics wins={13} played={156} kdratio={2.53} top5={24} top12={42} />)
	);