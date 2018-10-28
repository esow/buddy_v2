import * as React from "react";
import "./FortnitePage.css";
import { RouteComponentProps, Route } from "react-router";
import FindUserContainer from "../../containers/FindUserContainer";
import UserPaneContainer from "../../containers/UserPaneContainer";
import { FormEvent } from "react";
import { connectToSocket } from "../../store/matching/actions";
import { UserState } from "../../store/user/reducer";
import { AuthState } from "../../store/auth/reducer";
import { MatchingState } from "../../store/matching/reducer";
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { loadAuth } from "../../store/auth/actions";
import { Button } from "semantic-ui-react";

interface DispatchEvents {
	connectToSocket: typeof connectToSocket;
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

	connectSocket = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (this.props.auth.auth && this.props.matching.channel == null && this.props.user.stats) {
			this.props.connectToSocket(this.props.auth.auth, this.props.user);
		}
	}

	render() {
		var show = this.props.user.stats == null;

		return (
			<div className="fortnite-page">
				<div className="page-content">
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
					<FindUserContainer />
					<Route path={`${this.props.match.url}/:platform/:username`} component={UserPaneContainer} />
					<form className="summoner-search" hidden={show} onSubmit={this.connectSocket}>
						<Button> Find some freinds GOGO </Button>
					</form>
				</div>
			</div>

		);
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.user,
	auth: state.auth,
	matching: state.matching
});
export default connect(mapStateToProps, { connectToSocket: connectToSocket, loadAuth: loadAuth }
)(FortnitePage);
