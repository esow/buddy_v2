import * as React from "react";
import "./Criteria/Criteria.css";
import AgeGroup from "./Criteria/AgeGroup";
import Languages from "./Criteria/Languages";
import VoiceChat from "./Criteria/VoiceChat";
import Comment from "./Criteria/Comment";

export interface UserCriteriaSelectorPaneProps {
}

export default class UserCriteriaSelectorPane extends React.Component<UserCriteriaSelectorPaneProps, any> {

	render() {

		const handle = () => true;

		return (
			<div >
				<Languages
					handleChange={handle}
					languageOptions={[]}
					value=""
				/>
				<VoiceChat
					handleChange={handle}
					voicechat={[true]}
				/>
				<AgeGroup
					handleChange={handle}
					value=""
				/>
				<Comment
					handleChange={handle}
					comment=""
				/>
			</div>
		);
	}
}
