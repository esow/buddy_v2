import * as React from "react";
import { Card } from "semantic-ui-react";
import DimmableCard from "../DimmableCard/DimmableCard";

export interface GameSelectorProps {
	listOfGames: {
		imageSrc: string;
		title: string;
		playerCount: Number;
	}[];

}

export default class GameSelector extends React.Component<GameSelectorProps, any> {

	render() {

		return (
			<Card.Group centered>
				{
					// tslint:disable-next-line:typedef
					this.props.listOfGames.map((elem, _) => {
						// tslint:disable-next-line:jsx-key
						return (
							<DimmableCard
								key={elem.title}
								imageSrc={elem.imageSrc}
								title={elem.title}
								playerCount={elem.playerCount}
							/>
						);
					})
				}
			</Card.Group>);

	}
}
