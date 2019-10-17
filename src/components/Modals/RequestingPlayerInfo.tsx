import { Grid, Statistic, Icon } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from '../../models/FornitePlayerStats';
import { ageGroups } from "../../resources/AgeGroups";

export interface RequestingPlayerInfoProps {
    player: FortnitePlayerStats;
}

export default class RequestingPlayerInfo extends Component<RequestingPlayerInfoProps> {
    render() {
        const player = this.props.player;
        return (
            <Grid.Row centered>
                <Statistic.Group widths="5" size={"tiny"}>
                    <Statistic>
                        <Statistic.Value>{ageGroups[player.ageGroup]}</Statistic.Value>
                        <Statistic.Label><Icon name="users" color="blue" />Age</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.voiceChat}</Statistic.Value>
                        <Statistic.Label><Icon name="microphone" color="black" />Voice</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo && player.duo.gamesWon && (player.duo.gamesWon / player.duo.gamesPlayed * 100).toPrecision(2)}%</Statistic.Value>
                        <Statistic.Label><Icon name="winner" color="orange" />Win %</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo && player.duo.top5finishes}</Statistic.Value>
                        <Statistic.Label><Icon name="angle double up" color="green" />Top5</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo && player.duo.gamesPlayed}</Statistic.Value>
                        <Statistic.Label><Icon name="game" color="violet" />Played</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>{player.duo && player.duo.killDeathRatio && (player.duo.killDeathRatio).toPrecision(2)}</Statistic.Value>
                        <Statistic.Label><Icon name="bullseye" color="red" />K/D-Ratio</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Grid.Row>
        );
    }
}