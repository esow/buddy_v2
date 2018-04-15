import * as React from "react";
import { UserState } from "../store/user/types";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import { connect } from "react-redux";
import ServerStatsPane from "../components/ServerStatsPane/ServerStatsPane";

export interface ServerStatsPaneContainerProps extends ConnectedReduxProps<UserState> {
}

type AllProps = ServerStatsPaneContainerProps & UserState;

class ServerStatsPaneContainer extends React.Component<AllProps, any> {

	render() {
		return (
			<div>
				<ServerStatsPane playersOnline={10} />
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(ServerStatsPaneContainer);
