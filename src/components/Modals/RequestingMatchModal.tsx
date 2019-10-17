import { Modal, Button } from "semantic-ui-react";
import ReactCountdownClock from "react-countdown-clock";
import { Component } from "react";
import * as React from "react";
import { Grid, Header } from "semantic-ui-react";
import ReactCountryFlag from "react-country-flag";
import "./modal.css";
import RequestingPlayerInfo from "./RequestingPlayerInfo";
import { FortnitePlayerStats } from '../../models/FornitePlayerStats';

interface RequestingMatchModalProps {
    player?: FortnitePlayerStats;
    open: boolean;
    handleClose: () => void;
    timeLeft: number;

}
export default class RequestingMatchModal extends Component<RequestingMatchModalProps, {}> {

    constructor(Props: RequestingMatchModalProps) {
        super(Props);
    }

    cancel = () => {
        this.props.handleClose();
    }

    render() {
        const player = this.props.player;
        return (
            player ? <div>
                <Modal
                    dimmer={"blurring"}
                    closeOnRootNodeClick={false}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    size={"small"}
                >
                    <Grid centered>
                        <Grid.Row><Header>Requesting Buddy...</Header></Grid.Row>
                        <Grid.Row centered columns={1}>
                            <Header size="medium">{player.name}</Header>
                        </Grid.Row>
                        <Grid.Row centered>
                            {player.languages && player.languages.map((element: any) => {
                                return <ReactCountryFlag code={element} styleProps={{ margin: "5px", width: "31.5px", height: "21.5px" }} svg />
                            })}
                        </Grid.Row>
                        <RequestingPlayerInfo player={player} />
                        <Grid.Row centered>
                            {player.comment}
                        </Grid.Row>
                        <Grid.Row centered className="countdown">
                            <ReactCountdownClock
                                seconds={this.props.timeLeft}
                                size="60"
                                color="#334D6E"
                                onComplete={this.cancel}
                                showMilliseconds="false"
                            />
                        </Grid.Row>
                        <Grid.Row centered>
                            <Button className="cancel-button" onClick={this.cancel} content='CANCEL' />
                        </Grid.Row>
                    </Grid>
                </Modal>

            </div>
                : <div></div>
        );
    }
}
