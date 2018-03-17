import * as React from "react";
import "./SummonerSearch.css";

export interface SummonerSearchProps {
}

export default class SummonerSearch extends React.Component<SummonerSearchProps, any> {
	render() {
		return (
			<form className="summoner-search">
				<input type="search" placeholder="Your Summoner Name" />
				<select name="region" id="region-select">
					<option value="euw">EUW</option>
					<option value="na">NA</option>
					<option value="kr">KR</option>
				</select>
				<button>Lets find some friends!</button>
			</form>
		);
	}
}
