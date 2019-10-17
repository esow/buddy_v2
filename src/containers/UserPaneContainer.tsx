import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../store/root-reducer";
import { UserState } from "../store/user/reducer";
import { loadUser, editUserInput } from "../store/user/actions";
import { FortnitePlayerStats } from "../models/FornitePlayerStats";
import { loadAuth } from "../store/auth/actions";
import { FormEvent } from "react";
import { connectToSocket, leaveChannel } from "../store/matching/actions";
import { AuthState } from "../store/auth/reducer";
import { MatchingState } from "../store/matching/reducer";
import { UserInputState } from "../blocks/UserPane/UserPane";

export interface UserPaneContainerProps {
}

interface RouterParams {
	platform: string;
	username: string;
}

interface DispatchEvents {
	loadUser: typeof loadUser;
	loadAuth: typeof loadAuth;
	connectToSocket: typeof connectToSocket;
	leaveChannel: typeof leaveChannel;
	editUserInput: typeof editUserInput;
}

interface ConnectedProps {
	user: UserState;
	auth: AuthState;
	matching: MatchingState;
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

		if (this.props.auth.auth == null) {
			this.props.loadAuth();
		}
		if (this.props.user.stats == null) {
			const { platform, username } = this.props.match.params;
			this.props.loadUser(platform, username);
		}
		if (this.props.matching.channel !== undefined) {
			this.props.leaveChannel(this.props.matching.channel);
		}

	}

	connectSocket = (player: UserInputState, e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = {
			voiceChat: player.voice,
			ageGroup: player.age,
			comment: player.comment,
			languages: player.language
		};

		this.props.editUserInput(data);
		if (this.props.auth.auth && this.props.matching.channel === undefined && this.props.user.stats) {
			this.props.user.stats.id = this.props.auth.auth.session_id
			this.props.connectToSocket(this.props.auth.auth, this.props.user.stats, this.props.matching.socket);
		}
	}

	render() {

		const { platform } = this.props.match.params;

		if (this.props.user && this.props.user.stats) {
			const userStats = this.getUserStats(this.props.user.stats);
			return (

				<div>
					<UserPane
						platform={platform}
						username={this.props.user.stats.name}
						stats={userStats}
						selectedLanguages={this.props.user.stats.languages}
						selectedVoice={this.props.user.stats.voiceChat}
						selectedAge={this.props.user.stats.ageGroup}
						comment={this.props.user.stats.comment}
						connectToSocket={this.connectSocket}
					/>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.user,
	auth: state.auth,
	matching: state.matching
});

export default connect(mapStateToProps, {
	loadUser: loadUser,
	loadAuth: loadAuth,
	connectToSocket: connectToSocket,
	leaveChannel: leaveChannel,
	editUserInput: editUserInput
}
)(UserPaneContainer);
