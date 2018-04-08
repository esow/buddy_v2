import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { ApplicationState } from "../store/index";
import { connect } from "react-redux";
import { UserState } from "../store/user/types";

export interface UserPaneContainerProps {
}
type AllProps = UserPaneContainerProps & UserState;

class UserPaneContainer extends React.Component<AllProps, any> {
	render() {
		const username = this.props.user ? this.props.user.info.username : "No username found";
		const platform = this.props.user ? this.props.user.info.platform.toUpperCase() : "No platform found";
		return (
			<div>
				<UserPane username={username} platform={platform} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(UserPaneContainer);