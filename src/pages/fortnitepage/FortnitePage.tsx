import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";

export interface FortnitePageProps extends RouteComponentProps<any, any> {
}

export default class FortnitePage extends React.Component<FortnitePageProps, any> {
	render() {
		return (
			<div className="fortnite-page">
				<div className="page-content">
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
					<FindUserContainer />
					<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
				</div>
			</div>
		);
	}
}
