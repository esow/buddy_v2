import { Button, Popup, Icon, Table } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from "../../../models/FornitePlayerStats";
import * as _ from "lodash";
import { Flag } from "semantic-ui-react";
import { languages } from "../../../resources/Languages";
import { ageGroups } from '../../../resources/AgeGroups';
import "../MatchTable.css"

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
            <Table.Row>
                <Table.Cell>{this.props.match.name}</Table.Cell>
                <Table.Cell>{
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
                }</Table.Cell>
                <Table.Cell>{ageGroups[this.props.match.ageGroup]}</Table.Cell>
                <Table.Cell><Icon name={this.props.match.voiceChat ? "microphone" : "microphone slash"} size="large" color={"black"} /></Table.Cell>
                <Table.Cell>{this.props.match.duo.top5finishes}</Table.Cell>
                <Table.Cell>{this.props.match.duo.gamesPlayed}</Table.Cell>
                <Table.Cell>{this.props.match.duo.killDeathRatio.toFixed(1)}</Table.Cell>
                <Table.Cell>{Math.round(this.props.match.duo.gamesWon
                    / this.props.match.duo.gamesPlayed * 100) + "%"}</Table.Cell>
                <Table.Cell>{this.props.match.comment}</Table.Cell>
                <Table.Cell style={cell}><Button className="cancel-button confirm" onClick={this.requestMatch}> REQUEST </Button></Table.Cell>
            </Table.Row>

        );
    }
}

const cell = {
    margin: 0,
    height: 61,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}