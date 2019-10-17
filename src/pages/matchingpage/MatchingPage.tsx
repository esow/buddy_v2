import Notification from "react-web-notification";
import { Component } from "react";
import * as React from "react";
import CriteriaList from "../../components/CriteriaList/CriteriaList";
import MatchTable from "../../components/MatchTable/MatchTable";
import RequestingMatchModal from "../../components/Modals/RequestingMatchModal";
import "./MatchingPage.css";
import MatchRequestModal from "../../components/Modals/MatchRequestModal";
import MatchResponseModal from "../../components/Modals/MatchResponseModal";
import { FortnitePlayerStats } from "../../models/FornitePlayerStats";
import { Container, Grid, Divider } from 'semantic-ui-react';
import { answerMatchRequest, requestMatch, resetMatch } from '../../store/matching/actions';

interface State {
    status?: string;
    timeLeft: number;
    ignore: boolean;
    options?: any;
    title: string;
    showModal: number;

}
export interface ConnectedProps {
    matches: FortnitePlayerStats[];
    player?: FortnitePlayerStats;
    requestedPlayer?: FortnitePlayerStats;
    matchResponse?: String
    is_busy?: string
    local: boolean
    channel: any
}

interface DispatchProps {
    answerMatchRequest: typeof answerMatchRequest
    requestMatch: typeof requestMatch
    resetMatch: typeof resetMatch
}

export interface MatchingPageProps {

}

export default class MatchingPage extends Component<MatchingPageProps & ConnectedProps & DispatchProps, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: 0,
            status: undefined,
            timeLeft: 50,
            ignore: true,
            title: "asd",
        };
    }

    componentDidUpdate(prevProps: ConnectedProps) {
        console.log(prevProps.is_busy)
        console.log(this.props.is_busy)
        if (this.props.is_busy != undefined && prevProps.is_busy != this.props.is_busy) {
            this.props.answerMatchRequest(this.props.channel, this.props.is_busy, "Requested_Player_Busy")   
        }
    }

    handlePermissionGranted() {
        this.setState({
            ignore: false
        });
    }
    handlePermissionDenied() {
        this.setState({
            ignore: true
        });
    }
    handleNotSupported() {
        this.setState({
            ignore: true
        });
    }

    handleNotification = () => {

        if (this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = "You matched with someone!";
        const body = this.props.requestedPlayer ? this.props.requestedPlayer.name + " wants to play with you." : "";
        const tag = now;

        const options = {
            tag: tag,
            body: body,
            lang: "en",
            dir: "ltr"
        };

        this.setState({
            title: title,
            options: options
        });
    }

    render() {
        return (
            this.props.player ?
                <Container center className="main-content2" >
                    <Grid centered>
                        <Grid.Row style={{ padding: "0px" }}>
                            <Grid.Column >
                                <CriteriaList onChangeCriteria={() => true} criteria={this.props.player.criteria} />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider horizontal>Matches</Divider>
                        <Grid.Row style={{ padding: "0px" }}>
                            <Grid.Column>
                                <MatchTable
                                    matches={this.props.matches}
                                    requestMatch={(otherPlayer) =>
                                        this.props.requestMatch(this.props.channel, otherPlayer)
                                    }>
                                </MatchTable>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Notification
                        ignore={this.state.ignore && this.state.title !== ""}
                        title={this.state.title}
                        options={this.state.options}
                        // tslint:disable-next-line:jsx-no-bind
                        notSupported={this.handleNotSupported.bind(this)}
                        // tslint:drequestMatchisable-next-line:jsx-no-bind
                        onPermissionGranted={this.handlePermissionGranted.bind(this)}
                        // tslint:disable-next-line:jsx-no-bind
                        onPermissionDenied={this.handlePermissionDenied.bind(this)}
                        timeout={5000}
                    />

                    <RequestingMatchModal
                        open={this.props.requestedPlayer !== undefined && this.props.matchResponse === undefined && this.props.local}
                        handleClose={() => {
                            const id = this.props.requestedPlayer ? this.props.requestedPlayer.id : ""
                            this.props.answerMatchRequest(this.props.channel, id, "Request_Cancelled")
                        }}
                        player={this.props.requestedPlayer}
                        timeLeft={this.state.timeLeft}
                    />

                    <MatchRequestModal
                        open={this.props.requestedPlayer !== undefined && this.props.matchResponse === undefined && !this.props.local}
                        handleClose={() => {
                            const id = this.props.requestedPlayer ? this.props.requestedPlayer.id : ""
                            this.props.answerMatchRequest(this.props.channel, id, "Request_Cancelled")
                        }}
                        handleAccept={() => {
                            const id = this.props.requestedPlayer ? this.props.requestedPlayer.id : ""
                            this.props.answerMatchRequest(this.props.channel, id, "Request_Accepted")
                        }}
                        player={this.props.requestedPlayer}
                        timeLeft={this.state.timeLeft}
                    />

                    <MatchResponseModal
                        open={this.props.matchResponse !== undefined}
                        handleClose={() => this.props.resetMatch()}
                        player={this.props.requestedPlayer}
                        response={this.props.matchResponse}
                    />
                </Container >
                : <div></div>);
    }
}
