import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";
import { Image } from "semantic-ui-react";

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
					<Image centered style={{ width: 460, height: 230 }} src="/BUDDYGG-LOGO-3-no-text.png" />
					<FindUserContainer />
					<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
				</div>
			</div>

		);
	}
}
