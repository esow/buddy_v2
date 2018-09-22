import * as React from "react";
import UserPane from "../blocks/UserPane/UserPane";
import { ApplicationState } from "../store/index";
import { connect } from "react-redux";
import { UserState } from "../store/user/types";
import { RouteComponentProps } from "react-router";

export interface UserPaneContainerProps { }

interface RouterParams {
	platform: string;
	username: string;
}

type AllProps = UserPaneContainerProps & UserState & RouteComponentProps<RouterParams>;

class UserPaneContainer extends React.Component<AllProps, any> {
	render() {
		const { platform, username } = this.props.match.params;
		const user = this.props.user;
		const {
			top5finishes,
			top3finishes,
			top1finishes
		} = user ? user.data.duo : {
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
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => state.user;
export default connect(mapStateToProps)(UserPaneContainer);