import { Modal, Grid } from "semantic-ui-react";
import { Button, Header } from "semantic-ui-react";
import ReactCountryFlag from "react-country-flag";
import ReactCountdownClock from "react-countdown-clock";
import * as React from "react";
import { Component } from "react";
import "./modal.css";
import RequestingPlayerInfo from "./RequestingPlayerInfo";
import { FortnitePlayerStats } from '../../models/FornitePlayerStats';

export interface MatchRequestModalProps {
    player?: FortnitePlayerStats;
    open: any;
    timeLeft: any;
    handleClose: any;
    handleAccept: any;
}

export default class MatchRequestModal extends Component<MatchRequestModalProps, {}> {

    constructor(Props: MatchRequestModalProps) {
        super(Props);
    }

    reject = () => {
        this.setState({ open: false });
        this.props.handleClose();
    }

    accept = () => {
        this.setState({ open: false });
        this.props.handleAccept("Request_Accepted");
    }

    render() {
        const player = this.props.player;
        return (
            player ? (
                <Modal
                    closeOnRootNodeClick={false}
                    dimmer={"blurring"}
                    className="modal"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    size={'small'}
                >
                    <Grid centered>
                        <Grid.Row centered><Header>{player.name} has sent you a request!</Header></Grid.Row>
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
                        <Grid.Row centered className='countdown'>
                            <ReactCountdownClock
                                seconds={this.props.timeLeft}
                                size="60"
                                color="#334D6E"
                                onComplete={this.reject}
                                fontColor="white"
                                showMilliseconds="false"
                            />
                        </Grid.Row>
                        <Grid.Row centered>
                            <Button className='cancel-button confirm' onClick={this.accept} style={{ margin: "0 10px" }}> CONFIRM </Button>
                            <Button className='cancel-button cancel' onClick={this.reject} style={{ margin: "0 10px" }}> CANCEL </Button>
                        </Grid.Row>
                    </Grid>
                </Modal>
            )
                : (<Grid></Grid>)
        )
    }
}
