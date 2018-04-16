import * as React from "react";
import "./StartPage.css";
import { RouteComponentProps } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";

export interface StartPageProps extends RouteComponentProps<any> {
}

export default class StartPage extends React.Component<StartPageProps, any> {
	render() {
		return (
			<div className="start-page">
				<div className="page-content">
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
					<FindUserContainer />
					{/* <Route path={`${this.props.match.url}:userId`} component={UserPaneContainer} /> */}
				</div>
			</div>
		);
	}
}
