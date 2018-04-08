import * as React from "react";
import "./UserSearch.css";
import { FormEvent } from "react";
import history from "../../utils/history";

export interface UserSearchProps {
	onSubmit: (user: any) => void;
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
		this.props.onSubmit("test");
		history.push("/123");
	}

	render() {
		return (
			<>
				<form className="summoner-search" onSubmit={this.submit}>
					<input type="search" placeholder="Insert your username" />
					<select name="region" id="region-select">
						<option value="euw">PC</option>
						<option value="na">PS4</option>
						<option value="kr">XBOX</option>
					</select>
					<button>Lets find some friends!</button>
				</form>

			</>
		);
	}
}
