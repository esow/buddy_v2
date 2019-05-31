import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import { Image, Grid, Header } from "semantic-ui-react";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";

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
					<Grid container centered>
						<Grid.Row>
							<Image centered style={{ height: 200, marginTop: 20 }} src="/BUDDYGG-LOGO-3-Fortnite.png" />
						</Grid.Row>
						<Grid.Row>
							<Header style={{ fontSize: 96, fontFamily: "Luckiest Guy", color: "#FFF" }}>FORTNITE</Header>
						</Grid.Row>
						<Grid.Row centered columns={16}>
							<Grid.Column computer={10} tablet={16} mobile={14}><FindUserContainer /></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column computer={10} table={16} mobile={16}>
								<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>

		);
	}
}
