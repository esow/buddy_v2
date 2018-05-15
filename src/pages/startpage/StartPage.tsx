import * as React from "react";
import "./StartPage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";

export interface StartPageProps extends RouteComponentProps<StartPageProps> {
}

export default class StartPage extends React.Component<StartPageProps, any> {
	render() {
		return (
			<div className="start-page">
				<div className="page-content">
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
					<FindUserContainer />
					<Route path={`${this.props.match.url}:platform/:username`} component={UserPaneContainer} />
				</div>
			</div>
		);
	}
}
