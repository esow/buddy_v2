import * as React from "react";
import "./StartPage.css";
import { RouteComponentProps } from "react-router";
import { Route } from "react-router-dom";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";
import ServerStatsPaneContainer from "../../containers/ServerStatsPaneContainer";

export interface StartPageProps extends RouteComponentProps<any> {
}

export default class StartPage extends React.Component<StartPageProps, any> {
	render() {
		return (
			<div className="start-page">
				<div className="page-content">
					<ServerStatsPaneContainer />
					<p><span>Buddy.GG</span> - Fortnite</p>
					<div className="welcome-text">
						<p>Find people to play with, easily.</p>
						<p>People who <span>speak your language</span>.</p>
					</div>
					<FindUserContainer />
					<Route path={`${this.props.match.url}:userId`} component={UserPaneContainer} />
				</div>
			</div>
		);
	}
}
