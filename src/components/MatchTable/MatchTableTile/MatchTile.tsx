import { Grid, Button } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import ".././MatchTable.css";

export default class MatchTile extends Component<any, any> {
    requestMatch = () => {
        this.props.requestMatch(this.props.match);
    }

    openInNewTab = () => {
        const win =
            window.open(`http://${this.props.match.region}.op.gg/summoner/userName=${this.props.match.name}`, "_blank");
        if (win != null) {
            win.focus();
        }

    }

    render() {
        // const style = {
        //     paddingTop: "2px",
        //     paddingBottom: "2px",
        // };

        return (
            <div className="match-tile">
                <Grid className="grid" columns="equal" verticalAlign="middle" divided>
                    <Grid.Column>
                        <h5 className="inline">
                            <Button primary compact onClick={this.openInNewTab}> OP.GG</Button>
                        </h5>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h5> {this.props.match.name} </h5>
                    </Grid.Column>
                    {/* <Grid.Column>
                        <h5> {convertLeague(this.props.match.leagues)} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {this.props.match.champions.map((champ) =>
                                 <Popup position="top center" key={champ} style={style}
                                  trigger={<div className="icon">{getChampImage(champ)}</div>} content={champ} />)}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {this.props.match.positions.map((position) =>
                                 <div key={position} className="icon"> {getRoleImage(position)} </div>)}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {
                                this.props.match.languages.map((language, index) => {
                                    return <Popup key={index}
                                        position="top center"
                                        style={style}
                                        trigger={
                                            <div>
                                                {getFlagImage(language)}
                                            </div>}
                                        content={_.find(languages, x => x.value === language).text} />;
                                })
                            }
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="language-box">
                            {ageGroups[this.props.match.age_group]}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 className="inline">
                            {
                                this.props.match.voice.map((bool, index) => {
                                    const icon = bool ? "microphone" : "microphone slash";
                                    return <Icon key={index} name={icon} size="large" />;
                                })
                            }
                        </h5>
                    </Grid.Column> */}
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
