import * as React from "react";
import "./SummonerSearch.css";
import { FormEvent } from "react";
import { Redirect } from "react-router";

export interface SummonerSearchProps {
}
export interface SummonerSearchState {
	fireRedirect: boolean;
}

export default class SummonerSearch extends React.Component<SummonerSearchProps, SummonerSearchState> {
	constructor(props: SummonerSearchProps) {
		super(props);
		this.state = {
			fireRedirect: false
		};
	}

	submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.setState({ fireRedirect: true });
	}

	render() {
		const { fireRedirect } = this.state;

		return (
			<>
				<form className="summoner-search" onSubmit={this.submit}>
					<input type="search" placeholder="Your Summoner Name" />
					<select name="region" id="region-select">
						<option value="euw">EUW</option>
						<option value="na">NA</option>
						<option value="kr">KR</option>
					</select>
					<button>Lets find some friends!</button>
				</form>

				{fireRedirect && (
					<Redirect to={"/summoner/1"} />
				)}
			</>
		);
	}
}
