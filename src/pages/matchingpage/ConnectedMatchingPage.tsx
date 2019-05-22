
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { Component } from "react";
import * as React from "react";
import MatchingPage, { MatchingPageProps, ConnectedProps } from "./MatchingPage";

class ConnectedMatchingPage extends Component<MatchingPageProps & ConnectedProps> {
	render() {
		return <MatchingPage matches={this.props.matches} criteria={this.props.criteria} />
	}

}

const mapStateToProps = (state: RootState) => ({
	matches: state.matching.matches
});

export default connect(mapStateToProps, {})(ConnectedMatchingPage);
