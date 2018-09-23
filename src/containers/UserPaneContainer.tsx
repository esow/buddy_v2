import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../store/root-reducer";
import { UserState } from "../store/user/reducer";
import { User } from "../utils/mocks";

export interface UserPaneContainerProps { }

interface RouterParams {
	platform: string;
	username: string;
}

type AllProps = UserPaneContainerProps & UserState & RouteComponentProps<RouterParams>;

class UserPaneContainer extends React.Component<AllProps, any> {

	getUserStats = (user: User) => {
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

	render() {
		const { platform, username } = this.props.match.params;

		if (this.props.user) {
			const userStats = this.getUserStats(this.props.user);
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

const mapStateToProps = (state: RootState) => state.user;
export default connect(mapStateToProps)(UserPaneContainer);