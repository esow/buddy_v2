import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
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
		const username = this.props.user ? this.props.user.data.username : "No username found";
		return (
			<div>
				<UserPane username={username} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(UserPaneContainer);