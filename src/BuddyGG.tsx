import * as React from "react";
import StartPage from "./pages/startpage/StartPage";

export interface BuddyGGProps {
}

export default class BuddyGG extends React.Component<BuddyGGProps, any> {
	render() {
		return (
			<div className="buddygg" >
				<StartPage />
			</div>
		);
	}
}
