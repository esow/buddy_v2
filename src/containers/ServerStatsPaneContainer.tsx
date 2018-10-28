import * as React from "react";
import { connect } from "react-redux";
import ServerStatsPane from "../components/ServerStatsPane/ServerStatsPane";
import { loadStats } from "../store/ServerStats/actions";
import { RootState } from "../store/root-reducer";

export interface ServerStatsPaneContainerProps {
	timer: any;
}

class ServerStatsPaneContainer extends React.Component<any, any> {

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
		const players = this.props.playersOnline !== undefined ? this.props.playersOnline : 0;
		return (
			<div >
				<ServerStatsPane playersOnline={players} />
			</div >
		);
	}
}

const mapStateToProps = (state: RootState) => state;
export default connect(mapStateToProps)(ServerStatsPaneContainer);
