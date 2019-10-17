import * as React from "react";
import "./UserPane.css";
import FortniteStatistics from "../../components/Statistics/FortniteStatistics";
import UserCriteriaSelectorPane from "../../components/UserCriteriaSelector/UserCriteriaSelector";
import { Button, Container, Grid, Header } from "semantic-ui-react";

export interface UserPaneProps {
	platform: string;
	username: String;
	stats: {
		totalGamesWon: number;
		totalGamesPlayed: number;
		soloGamesWon: number;
		soloGamesPlayed: number;
		soloKillDeathRatio: number;
		soloTop10Finishes: number;
		soloTop25Finishes: number;
		duoGamesWon: number;
		duoGamesPlayed: number;
		duoKillDeathRatio: number;
		duoTop5Finishes: number;
		duoTop12Finishes: number;
		squadGamesWon: number;
		squadGamesPlayed: number;
		squadKillDeathRatio: number;
		squadTop3Finishes: number;
		squadTop6Finishes: number;
	};
	selectedLanguages: string[];
	selectedVoice: boolean;
	selectedAge: string;
	comment: string;
	connectToSocket: any;
}

export interface UserInputState {
	language: string[];
	comment: string;
	voice: boolean;
	age: string;
}

export default class UserPane extends React.Component<UserPaneProps, UserInputState> {

	constructor(props: UserPaneProps) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			age: this.props.selectedAge,
			language: this.props.selectedLanguages,
			voice: true,
			comment: this.props.comment
		};
	}

	static defaultProps: Partial<UserPaneProps> = {
		stats: {
			totalGamesWon: 0,
			totalGamesPlayed: 0,
			soloGamesWon: 0,
			soloGamesPlayed: 0,
			soloKillDeathRatio: 0,
			soloTop10Finishes: 0,
			soloTop25Finishes: 0,
			duoGamesWon: 0,
			duoGamesPlayed: 0,
			duoKillDeathRatio: 0,
			duoTop5Finishes: 0,
			duoTop12Finishes: 0,
			squadGamesWon: 0,
			squadGamesPlayed: 0,
			squadKillDeathRatio: 0,
			squadTop3Finishes: 0,
			squadTop6Finishes: 0,
		}
	};

	calculateWinRatio = (won: number, played: number) => {
		if (played === 0 || won === 0) {
			return 0;
		} else {
			return 100 * won / played;
		}
	}

	handleInputChange = (from: String, value: any) => {

		const nextState = {
			...this.state,
			[from.toString()]: value,
		};
		this.setState(nextState);
	}

	connectToSocket = (e: React.FormEvent<HTMLFormElement>) => {
		this.props.connectToSocket(this.state, e);
	}

	render() {
		const user = this.props;
		return (
			<Container className="user-pane summoner-pane user-input">
				<Grid centered>
					<Grid.Row centered columns={1}>
						<Header size="large">{user.username}</Header>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={16} >
							<FortniteStatistics
								winRatio={this.calculateWinRatio(user.stats.duoGamesWon, user.stats.duoGamesPlayed)}
								played={user.stats.duoGamesPlayed}
								kdRatio={user.stats.duoKillDeathRatio}
								top5={user.stats.duoTop5Finishes}
								top12={user.stats.duoTop12Finishes}
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column computer={11} tablet={12} mobile={16}>
							<UserCriteriaSelectorPane
								selectedAge={this.props.selectedAge}
								selectedLanguages={this.props.selectedLanguages}
								selectedComment={this.props.comment}
								selectedVoice={this.props.selectedVoice}
								handleChange={this.handleInputChange}
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column computer={11} tablet={12} mobile={16}>
							<form className="find-friends" onSubmit={this.connectToSocket}>
								<Button>FIND SOME FRIENDS</Button>
							</form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}
