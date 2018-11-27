import { Modal, Button } from "semantic-ui-react";
import RequestingPlayerInfo from "./RequestingPlayerInfo";
import ReactCountdownClock from "react-countdown-clock";
import { Component } from "react";
import * as React from "react";
import "./modal.css";

interface RequestingMatchModalProps {
    player: any;
    open: boolean;
    handleClose: () => void;
    timeLeft: number;

}
export default class RequestingMatchModal extends Component<RequestingMatchModalProps, { open: boolean }> {

    constructor(Props: RequestingMatchModalProps) {
        super(Props);
        this.state = { open: this.props.open };
    }

    cancel = () => {
        this.setState({ open: false });
        this.props.handleClose();
    }

    render() {
        const player = this.props.player;
        return (
            <div>
                <Modal
                    dimmer={"blurring"}
                    closeOnRootNodeClick={false}
                    open={this.state.open}
                    onClose={this.props.handleClose}
                >

                    <Modal.Header>Requesting match...</Modal.Header>
                    <Modal.Content className="no-padding">
                        <RequestingPlayerInfo match={player} />
                    </Modal.Content>
                    <Modal.Actions>
                        <div className="answer-bar">
                            <div className="button-box">
                                <Button negative onClick={this.cancel}> Cancel </Button>
                            </div>
                            <div className="countdown">
                                <ReactCountdownClock
                                    seconds={this.props.timeLeft}
                                    size="60"
                                    color="black"
                                    onComplete={this.cancel}
                                    showMilliseconds="false"
                                />
                            </div>
                        </div>
                    </Modal.Actions>
                </Modal>

            </div>

        );
    }
}
