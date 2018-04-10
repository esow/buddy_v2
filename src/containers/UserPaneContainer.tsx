import * as React from "react";
import UserPane from "../components/UserPane/UserPane";
import { ApplicationState } from "../store/index";
import { connect } from "react-redux";
import { UserState } from "../store/user/types";

export interface UserPaneContainerProps {
}
type AllProps = UserPaneContainerProps & UserState;

class UserPaneContainer extends React.Component<AllProps, any> {
	constructor(props: AllProps) {
		super(props);
		this.state = { user: {} };
	}
	render() {
		const username = this.props.user ? this.props.user.info.username : "No username found";
		const platform = this.props.user ? this.props.user.info.platform.toUpperCase() : "No platform found";
		const gamesPlayed = this.props.user ? this.props.user.lifetimeStats.matches : 0;
		const gamesWon = this.props.user ? this.props.user.lifetimeStats.wins : 0;
		return (
			<div>
				<UserPane username={username} platform={platform} gamesPlayed={gamesPlayed} gamesWon={gamesWon} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(UserPaneContainer);