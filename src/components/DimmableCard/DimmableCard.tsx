import * as React from "react";
import { Dimmer, Card, Button, Segment, Image } from "semantic-ui-react";

export interface DimmableCardProps {
	imageSrc: string;
	title: string;
	playerCount: Number;
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

					<Card.Content>
						<Image src={this.props.imageSrc} />
						<Card.Header>{this.props.title}</Card.Header>
						<Card.Meta>{this.props.playerCount} Players looking for a buddy</Card.Meta>
					</Card.Content>

					<Dimmer active={active}>
						<Button primary>Find a Buddy!</Button>
					</Dimmer>
				</Dimmer.Dimmable>
			</Card>

		);

	}
}
