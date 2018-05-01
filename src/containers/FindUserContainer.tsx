import * as React from "react";
import { UserState } from "../store/user/types";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import { connect } from "react-redux";
import { loadUser } from "../store/user/actions";
import UserSearch from "../components/UserSearch/UserSearch";
import { loadAuth } from "../store/auth/actions";

export interface FindUserContainerProps extends ConnectedReduxProps<UserState> {
}

type AllProps = FindUserContainerProps & UserState;

class FindUserContainer extends React.Component<AllProps, any> {

	componentDidMount() {
		this.props.dispatch(loadAuth());
	}

	fetchUser = (platform: string, username: string) => {
		this.props.dispatch(loadUser(platform, username));
	}

	render() {
		return (
			<div>
				<UserSearch onSubmit={this.fetchUser} isLoading={this.props.isFetching} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(FindUserContainer);