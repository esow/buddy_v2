import { Button, Modal, Header, Grid } from "semantic-ui-react";
import ReactCountryFlag from "react-country-flag";
import { Component } from "react";
import * as React from "react";
import "./modal.css";
import RequestingPlayerInfo from "./RequestingPlayerInfo";

interface MatchResponseModalProps {
    open: boolean;
    handleClose: () => void;
    response?: String;
    player: any;
}

export default class MatchResponseModal extends Component<MatchResponseModalProps> {

    constructor(Props: any) {
        super(Props);
    }

    handleClose = () => {
        this.props.handleClose();
    }

    render() {
        console.log(this.props.response)
        console.log(this.props.player)
        const player = this.props.player;
        let responseHeader;
        let message;
        let post_message = "Click on the button below to close this window and return to your list of matches."
        switch (this.props.response) {

            case "Request_Accepted":
                responseHeader = "Congratulations!";
                message = (
                    <span>You are now buddies with <span style={{ color: '#F15A29' }}>{this.props.player.name}</span>.<br />Add your new Buddy in the game client and say hi!<br />Good luck and have fun.</span>
                );
                break;

            case "Request_Rejected":
                responseHeader = "Request denied";
                message = (
                    <span><span style={{ color: '#F15A29' }}>{this.props.player.name}</span> has denied your Buddy request.<br />{post_message}</span>
                );
                break;

            case "Request_Cancelled":
                responseHeader = "Oops...";
                message = (
                    <span><span style={{ color: '#F15A29' }}>{this.props.player.name}</span> has cancelled their request.<br />{post_message}</span>
                );
                break;

            case "Requested_Player_Busy":
                responseHeader = "Hold on...";
                message = (
                    <span><span style={{ color: '#F15A29' }}>{this.props.player.name}</span> is responding to another request.<br />{post_message}</span>
                );
                break;

            default:
                responseHeader = "Hold on...";
                message = (
                    <span><span style={{ color: '#F15A29' }}>{}</span> is responding to another request.<br />{post_message}</span>
                );
                break;
        }

        return (
            this.props.player ?
                <Modal
                    size="small"
                    closeOnRootNodeClick={false}
                    dimmer={"blurring"}
                    className="modal"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <Grid centered>
                        <Grid.Row centered><Header> {responseHeader} </Header></Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}><Header size={'medium'} style={{ color: '#334D6E', textAlign: 'center' }}>{message}</Header></Grid.Column>
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
                        <Grid.Row><Button className='cancel-button confirm' onClick={this.handleClose}>CLOSE</Button></Grid.Row>
                    </Grid>
                </Modal>
                : <div></div>
        );
    }
}
