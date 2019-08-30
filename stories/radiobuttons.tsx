import * as React from "react";
import { storiesOf } from "@storybook/react";
import AgeGroup from '../src/components/UserCriteriaSelector/Criteria/AgeGroup';
import { Grid } from "semantic-ui-react";
import UserCriteriaSelectorPane from '../src/components/UserCriteriaSelector/UserCriteriaSelector';

storiesOf("Radio_Buttons", module)
	.add("Basic", () => (
		<AgeGroup
			handleChange={() => true}
			value={"1"}
		/>)

	)
	.add("full", () => (
		<Grid.Row centered>
			<Grid.Column computer={11} tablet={12} mobile={16}>
				<UserCriteriaSelectorPane
					selectedAge={"1"}
					selectedLanguages={["da"]}
					selectedComment={"asd"}
					selectedVoice={"yes"}
					handleChange={() => true}
				/>
			</Grid.Column>
		</Grid.Row>
	));
