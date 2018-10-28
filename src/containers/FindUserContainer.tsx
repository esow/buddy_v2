import * as React from "react";
import { connect } from "react-redux";
import { loadUser } from "../store/user/actions";
import UserSearch from "../components/UserSearch/UserSearch";
import { RootState } from "../store/root-reducer";
import "./FindUserContainer.css";

export interface DispatchProps {
	loadUser: typeof loadUser;
}

// type Props = UserState & DispatchProps;
class FindUserContainer extends React.Component<any, any> {

	fetchUser = (platform: string, username: string) => {
		this.props.loadUser(platform, username);
	}

	render() {
		return (
			<div className="findUserContainer">
				<UserSearch onSubmit={this.fetchUser} isLoading={this.props.isFetching} />
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => state.user;

export default connect(mapStateToProps, {
	loadUser: loadUser,
})(FindUserContainer);
