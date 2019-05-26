import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";
import { Image, Grid } from "semantic-ui-react";

interface DispatchEvents {
}

interface ConnectedProps {
}

type AllProps = ConnectedProps & RouteComponentProps<any> & DispatchEvents;

export default class FortnitePage extends React.Component<AllProps, any> {

	render() {
		return (
			<div className="fortnite-page">
				<div className="page-content">
					<Grid centered>
						<Grid.Row>
							<Image centered style={{ width: 460, height: 230, marginTop: 20 }} src="/BUDDYGG-LOGO-3-no-text.png" />
						</Grid.Row>
						<Grid.Row columns={16}>
							<Grid.Column width={8}><FindUserContainer /></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={8}>
								<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>

		);
	}
}
