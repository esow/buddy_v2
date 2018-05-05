import * as React from "react";
import { storiesOf } from "@storybook/react";
import BarChart from "../src/components/BarChart/BarChart";

storiesOf("Statistics", module)
	.add("BarChart with zero data", () => (
		<BarChart top5={0} top3={0} top1={0} />)
	)
	.add("BarChart with data 1", () => (
		<BarChart top5={5} top3={3} top1={1} />)
	)
	.add("BarChart with data 2", () => (
		<BarChart top5={50} top3={30} top1={15} />)
	)
	.add("BarChart with data 3", () => (
		<BarChart top5={250} top3={130} top1={15} />)
	)
	.add("BarChart with data 4", () => (
		<BarChart top5={760} top3={540} top1={109} />)
	);