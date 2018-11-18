import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../store/root-reducer";
import { UserState } from "../store/user/reducer";
import { loadUser } from "../store/user/actions";
import { FortnitePlayerStats } from "../models/FornitePlayerStats";
import { DropdownProps } from "semantic-ui-react";

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

	handleVoiceChat = (state: boolean) => {
		if (this.props.user.stats != null) {
			this.props.user.stats.voiceChat = state;
		}

	}

	handleAgeGroup = (age: string) => {
		if (this.props.user.stats != null) {
			this.props.user.stats.ageGroup = age;
		}
	}

	handleLanguage = (_: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
		if (this.props.user.stats != null) {
			if (this.props.user.stats.languages && this.props.user.stats.languages.length >= 5) {
				return;
			}
			if (data.value != null) {
				this.props.user.stats.languages = data.value as string[];
			}
		}
	}

	handleComment = (event: React.FormEvent<HTMLTextAreaElement>) => {
		console.log("database" + event.currentTarget.value);
		if (this.props.user.stats != null) {
			this.props.user.stats.comment += event.currentTarget.value;
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
						handleLanguage={this.handleLanguage}
						handleVoice={this.handleVoiceChat}
						handleAge={this.handleAgeGroup}
						handleComment={this.handleComment}
						selectedLanguages={this.props.user.stats.languages}
						selectedVoice={this.props.user.stats.voiceChat}
						selectedAge={this.props.user.stats.ageGroup}
						comment={this.props.user.stats.comment}
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
});

export default connect(mapStateToProps, { loadUser: loadUser }
)(UserPaneContainer);
