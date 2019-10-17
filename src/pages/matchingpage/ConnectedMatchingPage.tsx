
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { Component } from "react";
import * as React from "react";
import MatchingPage from './MatchingPage';
import { answerMatchRequest, requestMatch, resetMatch } from '../../store/matching/actions';
import { MatchingState } from '../../store/matching/reducer';
import { UserState } from '../../store/user/reducer';

interface ConnectedProps {
	matching: MatchingState,
	user: UserState
	answerMatchRequest: typeof answerMatchRequest
	requestMatch: typeof requestMatch
	resetMatch: typeof resetMatch,
}
class ConnectedMatchingPage extends Component<ConnectedProps> {
	render() {
		return <MatchingPage
			matches={this.props.matching.matches}
			player={this.props.user.stats}
			requestedPlayer={this.props.matching.matchPlayer}
			local={this.props.matching.local}
			matchResponse={this.props.matching.matchResponse}
			answerMatchRequest={this.props.answerMatchRequest}
			requestMatch={this.props.requestMatch}
			channel={this.props.matching.channel}
			resetMatch={this.props.resetMatch}
			is_busy={this.props.matching.is_busy}
		/>;
	}

	

}



const mapStateToProps = (state: RootState) => ({
	matching: state.matching,
	user: state.user,
});

export default connect(mapStateToProps, {
	answerMatchRequest: answerMatchRequest,
	requestMatch: requestMatch,
	resetMatch: resetMatch,
}
)(ConnectedMatchingPage);
