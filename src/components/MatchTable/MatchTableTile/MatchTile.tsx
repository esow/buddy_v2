import { Grid, Button, Popup, Icon } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import "../MatchTable.css";
import { FortnitePlayerStats } from "../../../models/FornitePlayerStats";
import * as _ from "lodash";
import { languages } from "../../../resources/Languages";
import { Flag } from "semantic-ui-react";
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
        const style = {
            paddingTop: "2px",
            paddingBottom: "2px",
        };

        return (
            <div className="match-tile">
                <Grid className="grid" columns="equal" verticalAlign="middle" divided>
                    <Grid.Column width={2}>
                        <h5> {this.props.match.name} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {
                                this.props.match.languages.map((language: any, index: any) => {
                                    return <Popup
                                        key={index}
                                        position="top center"
                                        style={style}
                                        trigger={
                                            <div>
                                                {this.getFlagImage(language)}
                                            </div>}
                                        content={_.find(languages, x => x.value === language)}
                                    />;
                                })
                            }
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="language-box">
                            {this.props.match.ageGroup}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 className="inline">
                            {
                                this.props.match.voiceChat &&
                                this.props.match.voiceChat.map((bool: any, index: any) => {
                                    const icon = bool ? "microphone" : "microphone slash";
                                    return <Icon key={index} name={icon} size="large" />;
                                })
                            }
                        </h5>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <h5 className="comment-box"> {this.props.match.comment} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <div> <Button onClick={this.requestMatch} primary compact> Request </Button> </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
