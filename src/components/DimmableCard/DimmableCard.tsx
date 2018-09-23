import * as React from "react";
import "./DimmableCard.css";
import history from "../../utils/history";
import { Dimmer, Card, Button, Segment, Image, Icon } from "semantic-ui-react";

export interface DimmableCardProps {
	imageSrc: string;
	title: string;
	playerCount: Number;
	destination: string;
}

export default class DimmableCard extends React.Component<DimmableCardProps, { active: boolean }> {

	state = { active: false };

	handleShow = () => this.setState({ active: true });
	handleHide = () => this.setState({ active: false });

	render() {
		const { active } = this.state;

		return (
			<Card>
				<Dimmer.Dimmable
					as={Segment}
					dimmed={active}
					onMouseEnter={this.handleShow}
					onMouseLeave={this.handleHide}
				>
					<Image src={this.props.imageSrc} />
					<Card.Content>
						<p>
							<Card.Header>{this.props.title}</Card.Header>
						</p>
					</Card.Content>
					<Card.Meta extra>
						<Icon name="user" />
						{this.props.playerCount} Players looking for a buddy
					</Card.Meta>

					<Dimmer active={active}>
						<Button primary onClick={() => { history.push(this.props.destination); }}>Find a Buddy!</Button>
					</Dimmer>
				</Dimmer.Dimmable>
			</Card>

		);

	}
}
