import * as React from "react";
import "./LandingPage.css";

export interface LandingPageProps {
}

export default class LandingPage extends React.Component<LandingPageProps, any> {
	render() {
		return (
			<div className="landing-page">
				<div className="page-content">
					<p className="buddy" >Buddy<span>GG</span></p>
					<p>FORTNITE</p>
				</div>
			</div>
		);
	}
}
