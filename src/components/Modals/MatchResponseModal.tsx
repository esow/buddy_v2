import { Button, Modal, Icon } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";

interface MatchResponseModalProps {
    open: boolean;
    handleClose: () => void;
    response: string;
    player: FortnitePlayerStats;
}

export default class MatchResponseModal extends Component<MatchResponseModalProps, { open: boolean }> {

    constructor(Props: any) {
        super(Props);
        this.state = { open: this.props.open };
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.handleClose();
    }

    render() {
        let responseHeader;
        let icon;
        let message;

        switch (this.props.response) {

            case "Request_Rejected":
                responseHeader = "I don't know how to tell you this, but...";
                icon = <Icon size="huge" color="red" name="remove circle" />;
                message = (
                    <div>
                        <h4>
                            {this.props.player.name} has denied your request. :(
                        </h4>
                        <h4>
                            Click close to return to your list of matches.
                        </h4>
                    </div>
                );
                break;

            case "Request_Cancelled":
                responseHeader = "Ooops...";
                icon = <Icon size="huge" color="red" name="remove circle" />;
                message = (
                    <div>
                        <h4>
                            {this.props.player.name} has canceled his request!
                    </h4>
                        <h4>
                            Click close to return to your list of matches.
                    </h4>
                    </div>
                );
                break;

            case "Requested_Player_Busy":
                responseHeader = "Hold on...";
                icon = <Icon size="huge" color="blue" name="warning circle" />;
                message = (
                    <div>
                        <h4>
                            {this.props.player.name} is responding to another request!
                    </h4>
                        <h4>
                            Click close to return to your list of matches.
                    </h4>
                    </div>
                );
                break;

            default:
                break;
        }

        return (
            <div>
                <Modal
                    size="small"
                    closeOnRootNodeClick={false}
                    dimmer={"blurring"}
                    className="modal"
                    open={this.state.open}
                    onClose={this.props.handleClose}
                >

                    <Modal.Header> <h2> {responseHeader} </h2> </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <div className="response-message">
                                <div className="response-logo">
                                    {icon}
                                </div>
                                {message}
                            </div>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <div className="answer-bar">
                            <Button onClick={this.handleClose} primary> Close </Button>
                        </div>
                    </Modal.Actions>
                </Modal>

            </div>

        );
    }
}
