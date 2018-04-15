import * as React from "react";
import { ApplicationState, ConnectedReduxProps } from "../store/index";
import { connect } from "react-redux";
import ServerStatsPane from "../components/ServerStatsPane/ServerStatsPane";
import { ServerStatsState } from "../store/ServerStats/types";
import { loadStats } from "../store/ServerStats/actions";

export interface ServerStatsPaneContainerProps extends ConnectedReduxProps<ServerStatsState> {
	timer: NodeJS.Timer | null;
}

type AllProps = ServerStatsPaneContainerProps & ServerStatsState;

class ServerStatsPaneContainer extends React.Component<AllProps, any> {

	componentDidMount() {
		this.setState({ timer: setInterval(() => this.getOnlinePlayers(), 10000) });
	}

	componentWillUnmount() {
		this.setState({ timer: null });
	}

	getOnlinePlayers() {
		return this.props.dispatch(loadStats());
	}

	render() {
		const players = this.props.playersOnline != null ? this.props.playersOnline.total : 0;
		return (
			<div >
				<ServerStatsPane playersOnline={players} />
			</div >
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.serverStats;
export default connect(mapStateToProps)(ServerStatsPaneContainer);
