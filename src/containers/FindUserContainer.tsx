import * as React from "react";
import { UserState } from "../store/user/types";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import { connect } from "react-redux";
import { userReceived } from "../store/user/actions";
import UserSearch from "../components/UserSearch/UserSearch";
import { userMOCK } from "../utils/mocks";

export interface FindUserContainerProps extends ConnectedReduxProps<UserState> {
}

type AllProps = FindUserContainerProps & UserState;

class FindUserContainer extends React.Component<AllProps, any> {

	fetchUser = () => {
		this.props.dispatch(userReceived(userMOCK));
	}

	render() {
		return (
			<div>
				<UserSearch onSubmit={this.fetchUser} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(FindUserContainer);