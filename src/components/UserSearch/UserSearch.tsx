import * as React from "react";
import "./UserSearch.css";
import { FormEvent } from "react";
import { Redirect } from "react-router";

export interface UserSearchProps {
}
export interface UserSearchState {
	fireRedirect: boolean;
}

export default class UserSearch extends React.Component<UserSearchProps, UserSearchState> {
	constructor(props: UserSearchProps) {
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
					<input type="search" placeholder="Your User Name" />
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
