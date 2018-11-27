import { Modal } from "semantic-ui-react";
import RequestingPlayerInfo from "./RequestingPlayerInfo";
import { Button } from "semantic-ui-react";
import ReactCountdownClock from "react-countdown-clock";
import * as React from "react";
import { Component } from "react";

export interface MatchRequestModalProps {
    player: any;
    open: any;
    timeLeft: any;
    handleClose: any;
    handleAccept: any;
}

export default class MatchRequestModal extends Component<MatchRequestModalProps, { open: false }> {

    constructor(Props: MatchRequestModalProps) {
        super(Props);
        this.state = { open: this.props.open };
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
            <div>
                <Modal
                    closeOnRootNodeClick={false}
                    dimmer={"blurring"}
                    className="modal"
                    open={this.state.open}
                    onClose={this.props.handleClose}
                >

                    <Modal.Header>Match found!</Modal.Header>
                    <Modal.Content className="no-padding">
                        <RequestingPlayerInfo match={player} />
                    </Modal.Content>
                    <Modal.Actions>
                        <div className="answer-bar">
                            <div className="button-box">
                                <Button negative onClick={this.reject}> Cancel </Button>
                            </div>
                            <div className="countdown">
                                <ReactCountdownClock
                                    seconds={this.props.timeLeft}
                                    size="60"
                                    color="black"
                                    onComplete={this.reject}
                                    fontColor="white"
                                    showMilliseconds="false"
                                />
                            </div>
                            <div className="button-box">
                                <Button positive onClick={this.accept}> Accept </Button>
                            </div>
                        </div>
                    </Modal.Actions>
                </Modal>

            </div>

        );
    }
}
