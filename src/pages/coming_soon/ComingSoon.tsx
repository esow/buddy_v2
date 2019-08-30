import * as React from "react";
import "./ComingSoon.css";
import { Image, Grid, Header } from "semantic-ui-react";
import { ServerStatsState } from "../../store/ServerStats/reducer";
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { loadStats } from "../../store/ServerStats/actions";

export interface LandingPageProps {
	loadStats: typeof loadStats;
	timer: any | null;
}

class ComingSoon extends React.Component<LandingPageProps & ServerStatsState, any> {

	render() {

		return (
			<div className="landing-page">
				<div className="page-content">
					<Grid container centered>
						<Grid.Row>
							<Image centered style={{ height: 200, marginTop: 20 }} src="/BUDDYGG-LOGO-3-Fortnite.png" />
						</Grid.Row>
						<Grid.Row>
							<Header style={{ fontSize: 96, fontFamily: "Roboto", color: "#FFF" }}>Buddy.GG</Header>
						</Grid.Row>
						<Grid.Row>
							<Header style={{ fontSize: 34, fontFamily: "Roboto", color: "#FFF" }}>Coming Soon</Header>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state: RootState) => state.serverStats;
export default connect(mapStateToProps, {
	loadStats: loadStats
})(ComingSoon);
