import * as React from "react";
import { UserState } from "../store/user/types";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import { connect } from "react-redux";
import { userReceived } from "../store/user/actions";

export interface FindUserContainerProps extends ConnectedReduxProps<UserState> {
}

type AllProps = FindUserContainerProps & UserState;

class FindUserContainer extends React.Component<AllProps, any> {

	test = () => {
		this.props.dispatch(userReceived({ name: "test" }));
	}
	render() {
		const { user } = this.props;

		return (
			<div>
				{user}
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(FindUserContainer);