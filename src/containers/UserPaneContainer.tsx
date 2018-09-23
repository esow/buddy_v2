import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../store/root-reducer";
import { UserState } from "../store/user/reducer";
import { User } from "../utils/mocks";
import { connectToSocket } from "../store/matching/actions";
import { AuthState } from "../store/auth/reducer";
import { MatchingState } from "../store/matching/reducer";
import { loadUser } from "../store/user/actions";

export interface UserPaneContainerProps {
}

interface RouterParams {
	platform: string;
	username: string;
}

interface DispatchEvents {
	connectToSocket: typeof connectToSocket;
	loadUser: typeof loadUser;
}

interface ConnectedProps {
	user: UserState;
	auth: AuthState;
	matching: MatchingState;
}

type AllProps = UserPaneContainerProps & ConnectedProps & RouteComponentProps<RouterParams> & DispatchEvents;

class UserPaneContainer extends React.Component<AllProps, any> {
<<<<<<< HEAD
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
=======
>>>>>>> inital socket setup

	componentDidMount() {
		if (this.props.user.user == null) {
			this.load();
		}
	}

<<<<<<< HEAD
	connectSocket = () => {
=======
	connectSocket = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
>>>>>>> inital socket setup
		const sessionId = this.props.auth.auth ? this.props.auth.auth.session_id : "";
		const users = {
			"name": "Lethly",
			"id": sessionId,
			"game": "lol",
			"voiceChat": [
				true
			],
			"ageGroup": "interval2",
			"comment": "test",
			"languages": [
				"DA",
				"KO",
				"EN"
			],
			"criteria": {
				"ageGroups": {
					"interval1": true,
					"interval2": true,
					"interval3": true
				},
				"voiceChat": {
					"YES": true,
					"NO": true
				},
				"ignoreLanguage": false
			},
			"gameInfo": {
				"iconId": 512,
				"region": "euw",
				"champions": [
					"Vayne",
					"Caitlyn",
					"Ezreal"
				],
				"leagues": {
					"type": "RANKED_SOLO_5x5",
					"tier": "GOLD",
					"rank": 1
				},
				"selectedRoles": {
					"top": true,
					"jungle": true,
					"mid": false,
					"marksman": false,
					"support": false
				},
				"gameCriteria": {
					"positions": {
						"top": true,
						"jungle": true,
						"mid": false,
						"marksman": false,
						"support": false
					}
				}
			}
		};
		if (this.props.auth.auth && this.props.matching.channel == null && this.props.user.user) {
			this.props.connectToSocket(this.props.auth.auth, users);
		}
	}

	load = () => {
		const { platform, username } = this.props.match.params;
		this.props.loadUser(platform, username);
	}

	render() {

		const { platform, username } = this.props.match.params;
<<<<<<< HEAD

		if (this.props.user && this.props.user.user) {
			const userStats = this.getUserStats(this.props.user.user);
			return (

				<div>
					<UserPane
						platform={platform}
						username={username}
						stats={userStats}
					/>
					<form className="summoner-search" onSubmit={this.connectSocket}>
						<Button> Find some freinds GOGO </Button>
					</form>
				</div>
			);
		} else {
			return (
				<div />
			);
		}
=======

		const user = this.props.user;
		const {
			top5finishes,
			top3finishes,
			top1finishes
		} = user.user ? user.user.duo : {
			top5finishes: 0,
			top3finishes: 0,
			top1finishes: 0
		};

		return (
			<div>

				<UserPane
					platform={platform}
					username={username}
					top5finishes={top5finishes}
					top3finishes={top3finishes}
					top1finishes={top1finishes}
				/>
				<form className="summoner-search" onSubmit={this.connectSocket}>
					<Button> Find some freinds GOGO </Button>
				</form>
			</div >
		);
>>>>>>> inital socket setup
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.user,
	auth: state.auth,
	matching: state.matching
});
export default connect(mapStateToProps, { connectToSocket: connectToSocket, loadUser: loadUser }
<<<<<<< HEAD
)(UserPaneContainer);
=======
)(UserPaneContainer);
>>>>>>> inital socket setup
