import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";
import { UserState } from "../../store/user/reducer";
import { AuthState } from "../../store/auth/reducer";
import { MatchingState } from "../../store/matching/reducer";
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { loadAuth } from "../../store/auth/actions";

interface DispatchEvents {
	loadAuth: typeof loadAuth;
}

interface ConnectedProps {
	user: UserState;
	auth: AuthState;
	matching: MatchingState;
}

type AllProps = ConnectedProps & RouteComponentProps & DispatchEvents;

export class FortnitePage extends React.Component<AllProps, any> {

	componentDidMount() {
		this.props.loadAuth();
	}

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

const mapStateToProps = (_: RootState) => ({
});
export default connect(mapStateToProps, { loadAuth: loadAuth }
)(FortnitePage);
