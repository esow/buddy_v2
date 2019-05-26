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

type AllProps = ConnectedProps & RouteComponentProps & DispatchEvents;

export default class FortnitePage extends React.Component<AllProps, any> {

	render() {
		return (
			<div className="fortnite-page">
				<div className="page-content">
					<Grid centered>
						<Grid.Row>
							<Image fluid centered style={{ width: 460, height: 230, marginTop: 20, minWidth: 460 }} src="/BUDDYGG-LOGO-3-no-text.png" />
						</Grid.Row>
						<Grid.Row centered columns={16}>
							<Grid.Column computer={8} tablet={16} mobile={14}><FindUserContainer /></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column computer={8} table={16} mobile={16}>
								<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>

		);
	}
}
