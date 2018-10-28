import * as React from "react";
import "./UserSearch.css";
import { FormEvent } from "react";
import history from "../../utils/history";
import { Button } from "semantic-ui-react";

export interface UserSearchProps {
	onSubmit: (platform: string, username: string) => void;
	isLoading: boolean;
}
export interface UserSearchState {
	platform: string;
	username: string;
}

export default class UserSearch extends React.Component<UserSearchProps, UserSearchState> {
	constructor(props: UserSearchProps) {
		super(props);
		this.state = {
			platform: "PC",
			username: "",
		};
	}

	submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = this.state.username;
		const platform = this.state.platform.toLowerCase();
		if (!username) { return; }
		this.props.onSubmit(platform, username);
		history.replace(`/fortnitebr/${platform}/${username}`);
	}

	onChangeUsername = (event: any) => {
		this.setState({
			username: event.target.value
		});
	}

	onChangePlatform = (event: any) => {
		this.setState({
			platform: event.target.value
		});
	}

	render() {
		return (
			<form className="summoner-search" onSubmit={this.submit}>
				<input
					type="search"
					placeholder="Insert your username"
					value={this.state.username}
					onChange={this.onChangeUsername}
				/>
				<select
					name="region"
					id="region-select"
					value={this.state.platform}
					onChange={this.onChangePlatform}
				>
					<option value="PC">PC</option>
					<option value="PS4">PS4</option>
					<option value="XBOX">XBOX</option>
				</select>
                <Button primary loading={this.props.isLoading}> Lets find some friends! </Button>
			</form>
		);
	}
}
