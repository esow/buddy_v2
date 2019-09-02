import { Grid, Button, Popup, Icon, Header } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from "../../../models/FornitePlayerStats";
import * as _ from "lodash";
import { Flag } from "semantic-ui-react";
import { languages } from "../../../resources/Languages";
import { ageGroups } from '../../../resources/AgeGroups';
interface MatchTileProps {
    match: FortnitePlayerStats;
    requestMatch: (match: FortnitePlayerStats) => void;
}

export default class MatchTile extends Component<MatchTileProps, any> {
    requestMatch = () => {
        this.props.requestMatch(this.props.match);
    }

    getFlagImage = (code: any) => {
        return <Flag className="flag" name={code.toLowerCase()} />;
    }

    openInNewTab = () => {
        const win =
            window.open(`http://${this.props.match.gameInfo.platform}.op.gg/summoner/userName=${this.props.match.name}`,
                "_blank");
        if (win != null) {
            win.focus();
        }

    }

    render() {
        return (

            <Grid columns="equal" textAlign="center" verticalAlign="middle">
                <Grid.Column width={2}>
                    <Header > {this.props.match.name} </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> {
                        this.props.match.languages.map((language: any, index: any) => {
                            return <Popup
                                key={index}
                                position="top center"
                                trigger={
                                    <div>
                                        {this.getFlagImage(language)}
                                    </div>}
                                content={_.find(languages, x => x.value === language)}
                            />;
                        })
                    } </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> {ageGroups[this.props.match.ageGroup]} </Header>
                </Grid.Column>
                <Grid.Column>

                    <Icon name={this.props.match.voiceChat ? "microphone" : "microphone slash"} size="large" color={"black"} />;


                </Grid.Column>
                <Grid.Column>
                    <Header> {this.props.match.duo.top5finishes} </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> {this.props.match.duo.gamesPlayed} </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> {this.props.match.duo.killDeathRatio.toFixed(1)} </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header> {
                        Math.round(this.props.match.duo.gamesWon
                            / this.props.match.duo.gamesPlayed * 100) + "%"} </Header>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header> {this.props.match.comment} </Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button className="cancel-button confirm" onClick={this.requestMatch}> REQUEST </Button>
                </Grid.Column>
            </Grid>

        );
    }
}
