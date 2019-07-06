import { Grid, Statistic, Icon } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";

export interface RequestingPlayerInfoProps {
    player: any;
}

export default class RequestingPlayerInfo extends Component<RequestingPlayerInfoProps> {
    render() {
        const player = this.props.player;
        return (
            <Grid.Row centered>
                <Statistic.Group widths="5" size={"tiny"}>
                    <Statistic>
                        <Statistic.Value>{player.criteria.ageGroups.age}</Statistic.Value>
                        <Statistic.Label><Icon name="users" color="blue" />Age</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.criteria.voiceChat.voice}</Statistic.Value>
                        <Statistic.Label><Icon name="microphone" color="black" />Voice</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{(player.duo.gamesWon / player.duo.gamesPlayed * 100).toPrecision(2)}%</Statistic.Value>
                        <Statistic.Label><Icon name="winner" color="orange" />Win %</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo.top5finishes}</Statistic.Value>
                        <Statistic.Label><Icon name="angle double up" color="green" />Top5</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo.gamesPlayed}</Statistic.Value>
                        <Statistic.Label><Icon name="game" color="violet" />Played</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{(player.duo.killDeathRatio).toPrecision(2)}</Statistic.Value>
                        <Statistic.Label><Icon name="bullseye" color="red" />K/D-Ratio</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Grid.Row>
        );
    }
}