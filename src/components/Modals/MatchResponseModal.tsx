import { Button, Modal, Icon, Header, Grid, Flag } from "semantic-ui-react";
import { Component } from "react";
import * as React from "react";
import "./modal.css";
import RequestingPlayerInfo from "./RequestingPlayerInfo";

interface MatchResponseModalProps {
    open: boolean;
    handleClose: () => void;
    response: string;
    player: any;
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
        const player = this.props.player;
        let responseHeader;
        let icon;
        let message;

        switch (this.props.response) {

            case "Request_Rejected":
                responseHeader = "Request denied";
                icon = <Icon size="huge" color="red" name="remove circle" />;
                message = (
                    <span><span style={{ color: '#F15A29' }}>{this.props.player.name}</span> has denied your Buddy request. Click on the button below to close this window and return to your list of matches.</span>
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
            <Modal
                size="small"
                closeOnRootNodeClick={false}
                dimmer={"blurring"}
                className="modal"
                open={this.state.open}
                onClose={this.props.handleClose}
            >
                <Grid centered>
                    <Grid.Row centered><Header> {responseHeader} </Header></Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={10}><Header size={'medium'} style={{ color: '#334D6E', textAlign: 'center' }}>{message}</Header></Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        {player.languages.map((element: any) => {
                            return <Flag name={element} />
                        })}
                    </Grid.Row>
                    <RequestingPlayerInfo player={player} />
                    <Grid.Row centered>
                        {player.comment}
                    </Grid.Row>
                    <Grid.Row><Button className='cancel-button confirm' onClick={this.handleClose}>CLOSE</Button></Grid.Row>
                </Grid>
            </Modal>

        );
    }
}
