import * as React from "react";
import "./UserSearch.css";
import { FormEvent } from "react";
import history from "../../utils/history";
import { Button, Input, Form, Select } from "semantic-ui-react";

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
		console.log(e)
		const username = this.state.username;
		const platform = this.state.platform.toLowerCase();
		if (!username) { return; }
		this.props.onSubmit(platform, username);
		history.replace(`/fortnitebr/${platform}/${username}`);
	}

	onChangeUsername = (_: any, { value }: any) => {
		this.setState({
			username: value
		});
	}

	onChangePlatform = (_: any, { value }: any) => {
		this.setState({
			platform: value
		});
	}

	render() {
		return (
			<Form fluid className="summoner-search" onSubmit={this.submit} inline>
				<Form.Group>
					<Form.Field style={styles} width={8} control={Input} icon="users" iconPosition="left" onChange={this.onChangeUsername} type="search" defaultValue={this.state.username} />
					<Form.Field width={2} fluid control={Select}
						value={this.state.platform}
						onChange={this.onChangePlatform}
						options={
							[
								{ key: 'pc', text: 'PC', value: 'PC' },
								{ key: 'xb', text: 'XBOX', value: 'XBOX' },
								{ key: 'ps', text: 'PS', value: 'PS' },
							]

						}
					>
					</Form.Field>
					<Form.Field width={6} fluid control={Button} loading={this.props.isLoading} > Search
					</Form.Field>
				</Form.Group>
			</Form >
		);
	}
}

const styles = {
	paddingLeft: "0px",
	paddingRight: "0px"
}
