import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../store/root-reducer";
import { UserState } from "../store/user/reducer";
import { loadUser } from "../store/user/actions";
import { FortnitePlayerStats } from "../models/FornitePlayerStats";

export interface UserPaneContainerProps {
}

interface RouterParams {
	platform: string;
	username: string;
}

interface DispatchEvents {
	loadUser: typeof loadUser;
}

interface ConnectedProps {
	user: UserState;
}

type AllProps = UserPaneContainerProps & ConnectedProps & RouteComponentProps<RouterParams> & DispatchEvents;

class UserPaneContainer extends React.Component<AllProps, any> {
	getUserStats = (user: FortnitePlayerStats) => {
		return {
			totalGamesWon: user.total.gamesWon,
			totalGamesPlayed: user.total.gamesPlayed,
			soloGamesWon: user.solo.gamesWon,
			soloGamesPlayed: user.solo.gamesPlayed,
			soloKillDeathRatio: user.solo.killDeathRatio,
			soloTop10Finishes: user.solo.top10finishes,
			soloTop25Finishes: user.solo.top25finishes,
			duoGamesWon: user.duo.gamesWon,
			duoGamesPlayed: user.duo.gamesPlayed,
			duoKillDeathRatio: user.duo.killDeathRatio,
			duoTop5Finishes: user.duo.top5finishes,
			duoTop12Finishes: user.duo.top12finishes,
			squadGamesWon: user.squad.gamesWon,
			squadGamesPlayed: user.squad.gamesPlayed,
			squadKillDeathRatio: user.squad.killDeathRatio,
			squadTop3Finishes: user.squad.top3finishes,
			squadTop6Finishes: user.squad.top6finishes,
		};
	}

	componentDidMount() {
		if (this.props.user.stats == null) {
			const { platform, username } = this.props.match.params;
			this.props.loadUser(platform, username);
		}
	}

	render() {

		const { platform, username } = this.props.match.params;

		if (this.props.user && this.props.user.stats) {
			const userStats = this.getUserStats(this.props.user.stats);
			return (

				<div>
					<UserPane
						platform={platform}
						username={username}
						stats={userStats}
					/>
				</div>
			);
		} else {
			return (
				<div />
			);
		}
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.user,
});

export default connect(mapStateToProps, { loadUser: loadUser }
)(UserPaneContainer);
