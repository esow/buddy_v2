import * as React from "react";
import "./Criteria/Criteria.css";
import AgeGroup from "./Criteria/AgeGroup";
import Languages from "./Criteria/Languages";
import VoiceChat from "./Criteria/VoiceChat";
import Comment from "./Criteria/Comment";
import "./UserCriteriaSelector.css";

export interface UserCriteriaSelectorPaneProps {
}

export interface ConnectedProps {
	selectedLanguages: string[];
	selectedVoice: string;
	selectedAge: string;
	selectedComment: string;
	handleChange: (from: String, data: any) => void;
}

export default class UserCriteriaSelectorPane
	extends React.Component<UserCriteriaSelectorPaneProps & ConnectedProps, any> {

	render() {

		return (
			<div className="userCriteria">
				<Languages
					selectedLanguages={this.props.selectedLanguages}
					handleChange={this.props.handleChange}
				/>
				<VoiceChat
					handleChange={this.props.handleChange}
					voicechat={this.props.selectedVoice}
				/>
				<AgeGroup
					handleChange={this.props.handleChange}
					value={this.props.selectedAge}
				/>
				<Comment
					handleChange={this.props.handleChange}
					comment={this.props.selectedComment}
				/>
			</div>
		);
	}
}
