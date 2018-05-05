import * as React from "react";
import { storiesOf } from "@storybook/react";
import UserPane from "../src/blocks/UserPane/UserPane";

storiesOf("User Pane", module)
	.add("No data", () => (
		<UserPane>Hello Button</UserPane>)
	);