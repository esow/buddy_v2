import * as React from "react";
import "./Criteria/Criteria.css";
import AgeGroup from "./Criteria/AgeGroup";
import Languages from "./Criteria/Languages";
import VoiceChat from "./Criteria/VoiceChat";
import Comment from "./Criteria/Comment";
import "./UserCriteriaSelector.css";
import { connect } from "react-redux";
import { RootState } from "../../store/root-reducer";

export interface UserCriteriaSelectorPaneProps {
}

export interface ConnectedProps {
	selectedLanguages: string[];
}

export class UserCriteriaSelectorPane extends React.Component<UserCriteriaSelectorPaneProps & ConnectedProps, any> {

	render() {

		const handle = (event: any, data: any) => {
			console.log(event);
			console.log(data);
		};

		return (
			<div className="userCriteria">
				<Languages
					selectedLanguages={this.props.selectedLanguages}
					handleChange={handle}
				/>
				<VoiceChat
					handleChange={handle}
					voicechat={"yes"}
				/>
				<AgeGroup
					handleChange={handle}
					value="interval1"
				/>
				<Comment
					handleChange={handle}
					comment=""
				/>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	if (state.user.stats != null) {
		return { selectedLanguages: state.user.stats.languages };
	} else {
		return { selectedLanguages: [] };
	}
};

export default connect(mapStateToProps, {})(UserCriteriaSelectorPane);